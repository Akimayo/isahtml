using System.ComponentModel.DataAnnotations;

namespace IsaApi.FormModels
{
    public class UserUpdatePasswordFormModel
    {
        [Required] public string CurrentPassword { get; set; }

        [Required] public string Password { get; set; }
        [Required] [Compare("Password")] public string PasswordConfirmation { get; set; }
    }
}