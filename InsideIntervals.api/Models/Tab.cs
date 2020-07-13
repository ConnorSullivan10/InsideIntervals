using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsideIntervals.api.Models
{
    public class Tab
    {
        public int TabId { get; set; }
        public int UserId { get; set; }
        public string TabName { get; set; }
        public string TabInput { get; set; }
    }
}
