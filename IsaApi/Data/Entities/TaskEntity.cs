using System;
using System.ComponentModel.DataAnnotations;
using Data.Entities.Enums;

namespace Data.Entities
{
    public class TaskEntity
    {
        [Key] public string Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public Tags Tag { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }

        public DateTime? CompletedAt { get; set; }

        public DateTime? DeadlineAt { get; set; }

        public UserEntity Author { get; set; }

        public TaskEntity()
        {
            Id = Guid.NewGuid().ToString();
        }
    }
}
