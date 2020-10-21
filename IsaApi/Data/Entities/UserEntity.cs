using System.Collections.ObjectModel;
using Microsoft.AspNetCore.Identity;

namespace Data.Entities
{
    public class UserEntity : IdentityUser
    {
        public string FullName { get; set; }

        public Collection<TaskEntity> Tasks { get; set; }
    }
}