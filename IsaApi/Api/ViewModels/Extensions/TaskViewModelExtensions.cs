using System;
using Data.Entities;

namespace IsaApi.ViewModels.Extensions
{
    public static class TaskViewModelExtensions
    {
        public static TaskViewModel AsViewModel(this TaskEntity entity)
        {
            return new TaskViewModel
            {
                Id = entity.Id,
                Description = entity.Description,
                IsComplete = entity.CompletedAt != null,
                Title = entity.Title,
                Tag = entity.Tag
            };
        }
    }
}
