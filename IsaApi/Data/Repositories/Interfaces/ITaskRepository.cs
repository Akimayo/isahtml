using Data.Entities;
using Data.Repositories.Entities;

namespace Data.Repositories.Interfaces
{
    public interface ITaskRepository
    {
        /// <summary>
        /// Get task by ID
        /// </summary>
        /// <param name="authorIdentity"></param>
        /// <param name="id"></param>
        /// <returns>Null if nothing found</returns>
        TaskEntity Get(string authorIdentity, string id);

        /// <summary>
        /// Get multiple tasks
        /// </summary>
        /// <param name="authorIdentity"></param>
        /// <param name="search"></param>
        /// <param name="page"></param>
        /// <param name="perPage"></param>
        /// <param name="onlyIncomplete"></param>
        /// <param name="orderByDate"></param>
        /// <returns></returns>
        EntityPage<TaskEntity> GetMultiple(string authorIdentity, string search, int page, int perPage,
            bool onlyIncomplete = false, OrderBy orderByDate = OrderBy.Ascending);

        /// <summary>
        /// Creates a new task
        /// </summary>
        /// <param name="authorIdentity"></param>
        /// <param name="entity"></param>
        TaskEntity Create(string authorIdentity, TaskEntity entity);

        /// <summary>
        /// Updates a task
        /// </summary>
        /// <param name="authorIdentity"></param>
        /// <param name="entity"></param>
        TaskEntity Update(string authorIdentity, TaskEntity entity);

        /// <summary>
        /// Deletes a task
        /// </summary>
        /// <param name="authorIdentity"></param>
        /// <param name="entity"></param>
        void Delete(string authorIdentity, TaskEntity entity);
    }
}