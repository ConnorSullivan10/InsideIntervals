using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsideIntervals.api.Models
{
    public class UserFeedback
    {
        public int FeedbackId { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string FeedbackSubject { get; set; }
        public string FeedbackContent { get; set; }
    }
}
