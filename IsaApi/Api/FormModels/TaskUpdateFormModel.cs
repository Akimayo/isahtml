using System;
using System.ComponentModel.DataAnnotations;
using Data.Entities;

namespace IsaApi.FormModels
{
    public class TaskUpdateFormModel
    {
        [Required] public string Title { get; set; }
        public string Description { get; set; } = "";
        public Tags Tag { get; set; }
        public bool IsComplete { get; set; } = false;
    }
}