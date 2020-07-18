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
        public string ChordIds { get; set; }
        public string ModeIds { get; set; }
        public string IntervalShapeIds { get; set; }
    }

    public class IntervalViewModel
    {
        public int IntervalId { get; set; }
        public string IntervalName { get; set; }
        public List<Chord> Chords { get; set; }
        public List<Mode> Modes { get; set; }
        public List<IntervalShape> Shapes {get;set;}
    }
}
