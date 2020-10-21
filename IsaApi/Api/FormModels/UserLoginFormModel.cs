using System.ComponentModel.DataAnnotations;

namespace IsaApi.FormModels
{
    public class UserLoginFormModel
    {
        [Required] public string Identity { get; set; }
        [Required] public string Password { get; set; }
    }
}