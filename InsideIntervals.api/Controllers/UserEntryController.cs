﻿using System;
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

        [HttpPost]
        public IActionResult UploadFile()
        {
            var fileUploadHelper = new FileUploadHelper();
            var file = fileUploadHelper.GetFileUploadContent(Request.ContentType, Request.Body);
            var fileAddedToDatabase = _repo.Add(file);
            return Created("" , fileAddedToDatabase);

            //var result = new UserEntry
            //{
            //    IntervalId = selectedInterval.IntervalId,
            //    IntervalName = selectedInterval.IntervalName,
            //    Chords = chords,
            //    Modes = modes,
            //    Shapes = shapes
            //};

            //return Ok(result);
        }

        //api/images/123
        [HttpGet("{id}")]
        public IActionResult GetFile(int id)
        {
            var uploadedFile = _repo.GetById(id);

            return File(uploadedFile.FileContent, uploadedFile.FileContentType);
        }
    }
}