using Data.Entities;
using Data.Repositories.Interfaces;
using IsaApi.FormModels;
using IsaApi.FormModels.Extensions;
using IsaApi.ViewModels;
using IsaApi.ViewModels.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IsaApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class TasksController : ControllerBase
    {
        private readonly ITaskRepository _taskRepository;

        public TasksController(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        [HttpGet]
        public ActionResult Index([FromQuery] FilterTaskFormModel filterTaskFormModel)
        {
            string identity = HttpContext.User.Identity.Name;
            return Ok(
                _taskRepository.GetMultiple(identity, filterTaskFormModel.Search, filterTaskFormModel.Page,
                    filterTaskFormModel.PerPage).AsViewModel()
            );
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult Detail(string id)
        {
            string identity = HttpContext.User.Identity.Name;
            TaskViewModel tvm = _taskRepository.Get(identity, id)?.AsViewModel();
            if (tvm == null) return NotFound();
            return Ok(tvm);
        }

        [HttpPut]
        [Route("{id}")]
        public ActionResult Update(string id, TaskUpdateFormModel formModel)
        {
            string identity = HttpContext.User.Identity.Name;
            TaskEntity te = formModel.AsEntity();
            te.Id = id;
            TaskViewModel tvm = _taskRepository.Update(identity, te)?.AsViewModel();
            if (tvm == null) return BadRequest();
            return Ok(tvm);
        }

        [HttpPost]
        public ActionResult Create(TaskCreationFormModel taskCreationFormModel)
        {
            string identity = HttpContext.User.Identity.Name;
            TaskEntity te = taskCreationFormModel.AsEntity();
            TaskViewModel tvm = _taskRepository.Create(identity, te)?.AsViewModel();
            if (tvm == null) return BadRequest();
            return Ok(tvm);
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult Destroy(string id)
        {
            string identity = HttpContext.User.Identity.Name;
            TaskEntity te = _taskRepository.Get(identity, id);
            if (te == null) return BadRequest();

            _taskRepository.Delete(identity, te);
            return Ok();
        }
    }
}
