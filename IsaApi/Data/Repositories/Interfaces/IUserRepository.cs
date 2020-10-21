using System.Threading.Tasks;
using Data.Entities;
using Microsoft.AspNetCore.Identity;

namespace Data.Repositories.Interfaces
{
    public interface IUserRepository
    {
        /// <summary>
        /// Finds user by id
        /// </summary>
        /// <param name="id">User id</param>
        /// <returns>Null if not found</returns>
        UserEntity Get(string id);
        
        /// <summary>
        /// Finds user by username or email.
        /// </summary>
        /// <param name="identity">Username or email</param>
        /// <returns>Null if not found</returns>
        UserEntity GetByIdentity(string identity);

        /// <summary>
        /// Creates a new user
        /// </summary>
        /// <param name="user"></param>
        /// <param name="password"></param>
        Task<IdentityResult> CreateAsync(UserEntity user, string password);

        /// <summary>
        /// Updates a user
        /// </summary>
        /// <param name="user"></param>
        UserEntity Update(UserEntity user);

        /// <summary>
        /// Updates a user's password
        /// </summary>
        /// <param name="user"></param>
        /// <param name="oldPassword"></param>
        /// <param name="password"></param>
        Task<IdentityResult> UpdatePasswordAsync(UserEntity user, string oldPassword, string password);
    }
}