using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Data.Repositories.Entities
{
    public class EntityPage<T>
    {
        public ICollection<T> Entities { get; set; }
        public int PerPage { get; set; }
        public int CurrentPage { get; set; }

        public int PageCount { get; set; }
    }
}