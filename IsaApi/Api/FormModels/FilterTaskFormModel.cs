using Data.Repositories.Entities;

namespace IsaApi.FormModels
{
    public class FilterTaskFormModel
    {
        public string Search { get; set; } = "";
        public int Page { get; set; } = 0;
        public int PerPage { get; set; } = 20;
        public bool OnlyIncomplete { get; set; } = false;
        public OrderBy OrderByDate { get; set; } = OrderBy.Ascending;
    }
}