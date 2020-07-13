using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsideIntervals.api.Models
{
    public class Favorite
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string FavLink { get; set; }
        public bool IsFav { get; set; }
    }
}
