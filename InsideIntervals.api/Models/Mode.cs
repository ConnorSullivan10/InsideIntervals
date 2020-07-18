using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsideIntervals.api.Models
{
    public class Mode
    {
        public int ModeId { get; set; }
        public string ModeType { get; set; }
        public string ModeName { get; set; }
        public string ModeDescription { get; set; }
        public byte[] ModeImg { get; set; }
        public string UniqueIntervals { get; set; }
    }
}
