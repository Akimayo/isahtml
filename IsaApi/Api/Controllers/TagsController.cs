using System;
using System.Collections.Generic;
using Data.Entities;
using Data.Entities.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IsaApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class TagsController : ControllerBase
    {
        [HttpGet]
        public ActionResult Index()
        {
            return Ok(Enum.GetNames(typeof(Tags)));
        }
    }
}