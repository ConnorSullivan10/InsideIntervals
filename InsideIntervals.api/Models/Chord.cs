using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsideIntervals.api.Models
{
    public class Chord
    {
        public int ChordId { get; set; }
        public string ChordName { get; set; }
        public string ChordDescription { get; set; }
        public byte[] ChordImg { get; set; }
    }
}
