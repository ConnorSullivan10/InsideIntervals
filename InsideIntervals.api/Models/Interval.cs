using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace InsideIntervals.api.Models
{
    public class Interval
    {
        public int IntervalId { get; set; }
        public string IntervalName { get; set; }
        public string IntervalDescription { get; set; }
        public string Chords { get; set; }
        public string Modes { get; set; }
        public byte[] IntervalImg { get; set; }
    }
}
