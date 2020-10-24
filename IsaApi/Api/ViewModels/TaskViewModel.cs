using Data.Entities.Enums;

namespace IsaApi.ViewModels
{
  public class TaskViewModel
  {
    public string Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public bool IsComplete { get; set; }

    public Tags Tag { get; set; }
  }
}
