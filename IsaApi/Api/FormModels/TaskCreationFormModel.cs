using System;
using System.ComponentModel.DataAnnotations;
using Data.Entities;
using Data.Entities.Enums;

namespace IsaApi.FormModels
{
    public class TaskCreationFormModel
    {
        [Required] public string Title { get; set; }
        public string Description { get; set; } = "";
        public Tags Tag { get; set; }
    }
}
