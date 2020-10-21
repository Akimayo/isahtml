using Data.Entities;

namespace IsaApi.FormModels.Extensions
{
    public static class UserRegistrationFormModelExtensions
    {
        public static UserEntity AsEntity(this UserRegistrationFormModel userRegistrationFormModel)
        {
            return new UserEntity
            {
                UserName = userRegistrationFormModel.Username,
                Email = userRegistrationFormModel.Email,
                FullName = userRegistrationFormModel.FullName
            };
        }
    }
}