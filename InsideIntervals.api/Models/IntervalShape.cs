using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsideIntervals.api.Models
{
    public class IntervalShape
    {
        public int ShapeId { get; set; }
        public int IntervalId { get; set; }
        public string AscendingOrDescending { get; set; }
        public byte[] ShapeImgFile { get; set; }
    }
}
