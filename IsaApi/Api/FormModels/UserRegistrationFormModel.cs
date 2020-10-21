using System.ComponentModel.DataAnnotations;

namespace IsaApi.FormModels
{
    public class UserRegistrationFormModel
    {
        [MinLength(2)] [Required] public string FullName { get; set; }
        [MinLength(2)] [Required] public string Username { get; set; }
        [EmailAddress] [Required] public string Email { get; set; }
        [Required] public string Password { get; set; }
        [Required] [Compare("Password")] public string PasswordConfirmation { get; set; }
    }
}