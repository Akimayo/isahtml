using System;
using System.Collections.Generic;
using System.Linq;
using Data.Entities;
using Data.Repositories.Entities;
using Data.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Data.Repositories
{
  public class TaskRepository : ITaskRepository
  {
    private readonly ApplicationDbContext _dbContext;
    private readonly IUserRepository _userRepository;

    public TaskRepository(ApplicationDbContext dbContext,
      IUserRepository userRepository)
    {
      _dbContext = dbContext;
      _userRepository = userRepository;
    }

    public TaskEntity Get(string authorIdentity, string id)
    {
      return _dbContext.Tasks.Include(t => t.Author)
        .FirstOrDefault(t => t.Author.UserName == authorIdentity && t.Id == id);
    }

    public EntityPage<TaskEntity> GetMultiple(string authorIdentity,
      string search, int page,
      int perPage,
      bool onlyIncomplete = false,
      OrderBy orderByDate = OrderBy.Ascending)
    {
      IQueryable<TaskEntity> entities = _dbContext.Tasks.Include(t => t.Author)
        .Where(t => t.Author.UserName == authorIdentity)
        .Where(t => t.Title.Contains(search));

      int count = entities.Count();

      entities = entities.Skip(page * perPage)
        .Take(perPage);
      entities = OrderBy.Ascending == orderByDate
        ? entities.OrderBy(t => t.DeadlineAt)
        : entities.OrderBy(t => t.DeadlineAt);

      List<TaskEntity> result = entities.ToList();

      int pageCount = (count / perPage);
      pageCount = pageCount < 0 ? 0 : pageCount;

      return new EntityPage<TaskEntity>
      {
        CurrentPage = page,
        PerPage = perPage,
        Entities = result,
        PageCount = pageCount
      };
    }

    public TaskEntity Create(string authorIdentity, TaskEntity entity)
    {
      UserEntity author = _userRepository.GetByIdentity(authorIdentity);
      entity.Author = author;
      entity.CreatedAt = DateTime.Now;
      entity.UpdatedAt = DateTime.Now;
      _dbContext.Tasks.Add(entity);
      _dbContext.SaveChanges();

      return entity;
    }

    public TaskEntity Update(string authorIdentity, TaskEntity entity)
    {
      TaskEntity te = Get(authorIdentity, entity.Id);
      if (te == null)
        return null;

      te.Description = entity.Description;
      te.Tag = entity.Tag;
      te.Title = entity.Title;
      te.CompletedAt = entity.CompletedAt;
      te.UpdatedAt = DateTime.Now;
      _dbContext.SaveChanges();

      return te;
    }

    public void Delete(string authorIdentity, TaskEntity entity)
    {
      TaskEntity te = Get(authorIdentity, entity.Id);
      if (te != null)
      {
        _dbContext.Tasks.Remove(te);
        _dbContext.SaveChanges();
      }
    }
  }
}
