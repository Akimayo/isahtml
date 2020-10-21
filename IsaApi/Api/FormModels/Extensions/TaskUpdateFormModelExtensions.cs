using System;
using Data.Entities;

namespace IsaApi.FormModels.Extensions
{
    public static class TaskUpdateFormModelExtensions
    {
        public static TaskEntity AsEntity(this TaskUpdateFormModel taskUpdateFormModel)
        {
            return new TaskEntity
            {
                Title = taskUpdateFormModel.Title,
                Description = taskUpdateFormModel.Description,
                Tag = taskUpdateFormModel.Tag,
                CompletedAt = taskUpdateFormModel.IsComplete ? DateTime.Now : (DateTime?) null
            };
        }
    }
}