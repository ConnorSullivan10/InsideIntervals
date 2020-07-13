using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using InsideIntervals.api.DataAccess;
using InsideIntervals.api.Models;

namespace InsideIntervals.Controllers
{
    [Route("api/intervals")]
    [ApiController]

    public class IntervalsController : ControllerBase
    {
        IntervalsRepo _repository;

        public IntervalsController(IntervalsRepo repository)
        {
            _repository = repository;
        }
    }
}