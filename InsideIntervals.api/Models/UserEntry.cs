using InsideIntervals.api.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsideIntervals.api.Models
{
    public class UserEntry
    {
        public int EntryId { get; set; }
        public string FirebaseUid { get; set; }
        public string EntryName { get; set; }
        public string EntryInput { get; set; }
        public int UploadedFileId { get; set; }
    }

    public class UserEntryViewModel
    {
        public int EntryId { get; set; }
        public int FirebaseUid { get; set; }
        public string EntryName { get; set; }
        public string EntryInput { get; set; }
        public UploadedFile File { get; set; }
    }
}
