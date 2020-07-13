using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using InsideIntervals.api.Models;
using InsideIntervals.api.DataAccess;

namespace InsideIntervals.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : FirebaseEnabledController
    {
        UsersRepo _repository;

        public UsersController(UsersRepo repository)
        {
            _repository = repository;
        }

        [HttpPost("register")]
        public IActionResult RegisterUser(User userToRegister)
        {
            //register the user

            return Ok();
        }

        [HttpGet("current")]
        public IActionResult GetCurrentUser()
        {
            //pull user info from the database based on email or firebaseid or whatever other property

            return Ok(new { Email = UserEmail, FirebaseId = UserId });
        }
    }
}
