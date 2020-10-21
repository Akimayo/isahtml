using Data.Entities;

namespace IsaApi.FormModels.Extensions
{
    public static class TaskCreationFormModelExtensions
    {
        public static TaskEntity AsEntity(this TaskCreationFormModel creationFormModel)
        {
            return new TaskEntity
            {
                Description = creationFormModel.Description,
                Title = creationFormModel.Title,
                Tag = creationFormModel.Tag
            };
        }
    }
}