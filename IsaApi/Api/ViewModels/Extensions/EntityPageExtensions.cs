using System.Linq;
using Data.Entities;
using Data.Repositories.Entities;

namespace IsaApi.ViewModels.Extensions
{
    public static class EntityPageExtensions
    {
        public static EntityPage<TaskViewModel> AsViewModel(this EntityPage<TaskEntity> entity)
        {
            return new EntityPage<TaskViewModel>
            {
                CurrentPage = entity.CurrentPage,
                PageCount = entity.PageCount,
                PerPage = entity.PerPage,
                Entities = entity.Entities.Select(e => e.AsViewModel()).ToList()
            };
        }
    }
}