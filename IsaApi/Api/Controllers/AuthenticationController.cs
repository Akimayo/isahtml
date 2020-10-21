using System.Threading.Tasks;
using Data.Entities;
using Data.Repositories.Interfaces;
using IsaApi.FormModels;
using IsaApi.FormModels.Extensions;
using IsaApi.ViewModels.Extensions;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SignInResult = Microsoft.AspNetCore.Identity.SignInResult;

namespace IsaApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly SignInManager<UserEntity> _signInManager;

        private readonly IUserRepository _userRepository;

        public AuthenticationController(SignInManager<UserEntity> signInManager, IUserRepository userRepository)
        {
            _signInManager = signInManager;
            _userRepository = userRepository;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(UserLoginFormModel userLoginFormModel)
        {
            UserEntity userEntity = _userRepository.GetByIdentity(userLoginFormModel.Identity);
            if (userEntity == null) return BadRequest();

            SignInResult signInResult = await _signInManager.PasswordSignInAsync(
                userEntity, userLoginFormModel.Password, true, false
            );

            if (signInResult.Succeeded) return Ok(userEntity.AsViewModel());
            return BadRequest();
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register(UserRegistrationFormModel userRegistrationFormModel)
        {
            UserEntity ue = userRegistrationFormModel.AsEntity();
            IdentityResult result = await _userRepository.CreateAsync(ue, userRegistrationFormModel.Password);
            if (result.Succeeded) return Ok();
            return BadRequest(result.Errors);
        }
    }
}