using System.Linq;
using System.Threading.Tasks;
using Data.Entities;
using Data.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _dbContext;
        private UserManager<UserEntity> _userManager;

        public UserRepository(ApplicationDbContext dbContext, UserManager<UserEntity> userManager)
        {
            _dbContext = dbContext;
            _userManager = userManager;
        }

        public UserEntity Get(string id)
        {
            return _dbContext.Users.FirstOrDefault(u => u.Id == id);
        }

        public UserEntity GetByIdentity(string identity)
        {
            return _dbContext.Users.FirstOrDefault(u => u.UserName == identity || u.Email == identity);
        }

        public async Task<IdentityResult> CreateAsync(UserEntity user, string password)
        {
            return await _userManager.CreateAsync(user, password);
        }

        public UserEntity Update(UserEntity user)
        {
            UserEntity userEntity = Get(user.Id);
            userEntity.FullName = user.FullName;
            userEntity.Email = user.Email;
            _dbContext.SaveChanges();

            return userEntity;
        }

        public async Task<IdentityResult> UpdatePasswordAsync(UserEntity user, string oldPassword, string password)
        {
            return await _userManager.ChangePasswordAsync(user, oldPassword, password);
        }
    }
}