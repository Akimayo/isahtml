using System;
using System.Threading.Tasks;
using Data.Entities;
using Data.Repositories.Interfaces;
using IsaApi.FormModels;
using IsaApi.ViewModels;
using IsaApi.ViewModels.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace IsaApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public IActionResult GetUser()
        {
            if (HttpContext.User.Identity.Name == null)
                return Unauthorized();

            UserViewModel uvm = _userRepository.GetByIdentity(User.Identity.Name)?.AsViewModel();
            if (uvm == null) return Unauthorized();
            return Ok(uvm);
        }

        [HttpPut]
        public IActionResult Update(UserUpdateFormModel userUpdateFormModel)
        {
            if (HttpContext.User.Identity.Name == null)
                return Unauthorized();

            UserEntity ue = _userRepository.GetByIdentity(User.Identity.Name);
            if (ue == null) return Unauthorized();

            UserViewModel uvm = _userRepository.Update(ue).AsViewModel();
            return Ok(uvm);
        }

        [HttpPut]
        [Route("Password")]
        public async Task<IActionResult> UpdatePassword(UserUpdatePasswordFormModel userUpdatePasswordFormModel)
        {
            if (HttpContext.User.Identity.Name == null)
                return Unauthorized();

            UserEntity ue = _userRepository.GetByIdentity(User.Identity.Name);
            if (ue == null) return Unauthorized();

            IdentityResult result = await _userRepository.UpdatePasswordAsync(ue, userUpdatePasswordFormModel.CurrentPassword,
                userUpdatePasswordFormModel.Password);

            if (result.Succeeded)
                return Ok();
            return BadRequest(result.Errors);
        }
    }
}