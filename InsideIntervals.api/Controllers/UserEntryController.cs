using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using InsideIntervals.api.DataAccess;
using InsideIntervals.api.Helpers;
using InsideIntervals.api.Models;

namespace InsideIntervals.api.Controllers
{
    [Route("api/userEntry")]
    [ApiController]
    public class UserEntryController : ControllerBase
    {
        readonly UserEntryRepo _repo;

        public UserEntryController(UserEntryRepo repo)
        {
            _repo = repo;
        }

        [HttpPost("fileUpload")]
        public IActionResult UploadFile()
        {
            var fileUploadHelper = new FileUploadHelper();
            var file = fileUploadHelper.GetFileUploadContent(Request.ContentType, Request.Body);
            var fileIdAddedToDatabase = _repo.Add(file);
            return Created("" , fileIdAddedToDatabase);
        }

        [HttpPost("newEntry")]
        public IActionResult NewUserEntry(UserEntry entryToAdd)
        {
            var newUserEntry = _repo.AddUserEntry(entryToAdd);
            return Created("", newUserEntry);
        }

        [HttpGet("user/{firebaseUid}")]
        public IActionResult GetAllUserEntriesByFirebaseUid(string firebaseUid)
       {
            var allUserEntries = _repo.GetUserEntriesByFirebaseUid(firebaseUid);
            return Ok(allUserEntries);
        }

        //api/userEntry/123
        [HttpGet("{id}")]
        public IActionResult GetFile(int id)
        {
            var uploadedFile = _repo.GetFileById(id);

            return File(uploadedFile.FileContent, uploadedFile.FileContentType);
        }

        //api/userEntry/1
        [HttpDelete("{userEntryIdToDelete}")]
        public IActionResult DeleteUserEntry(int userEntryIdToDelete)
        {
            var userEntryToDelete = _repo.DeleteUserEntryUpload(userEntryIdToDelete);
            var deletedFile = _repo.DeleteUserFile(userEntryToDelete.UploadedFileId);
            return Ok(deletedFile);

        }

        //api/userEntry/file/1
        [HttpDelete("file/{fileIdToDelete}")]
        public IActionResult DeleteFile(int fileIdToDelete)
        {
            var fileToDelete = _repo.DeleteUserFile(fileIdToDelete);
            return Ok(fileToDelete);
        }

        [HttpPost("feedback")]
        public IActionResult NewUserFeedback(UserFeedback feedbackToAdd)
        {
            var newUserFeedback = _repo.AddUserFeedback(feedbackToAdd);
            return Created("", newUserFeedback);
        }
    }
}
