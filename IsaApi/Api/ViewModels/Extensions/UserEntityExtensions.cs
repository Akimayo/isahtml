using Data.Entities;

namespace IsaApi.ViewModels.Extensions
{
    public static class UserEntityExtensions
    {
        public static UserViewModel AsViewModel(this UserEntity userEntity)
        {
            return new UserViewModel(userEntity.Id, userEntity.UserName, userEntity.Email, userEntity.FullName);
        }
    }
}