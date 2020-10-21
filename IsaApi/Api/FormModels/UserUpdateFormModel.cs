using System.ComponentModel.DataAnnotations;

namespace IsaApi.FormModels
{
    public class UserUpdateFormModel
    {
        [MinLength(2)] [Required] public string FullName { get; set; }
        [MinLength(2)] [Required] public string Username { get; set; }
        [EmailAddress] [Required] public string Email { get; set; }
    }
}