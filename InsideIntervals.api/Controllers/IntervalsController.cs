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
using Microsoft.VisualBasic;

namespace InsideIntervals.Controllers
{
    [Route("api/intervals")]
    [ApiController]

    public class IntervalsController : ControllerBase
    {
        IntervalsRepo _intervalsRepository;

        public IntervalsController(IntervalsRepo repository)
        {
            _intervalsRepository = repository;
        }

        //api/intervals/{intervalId}
        [HttpGet("{intervalId}")]
        public IActionResult GetIntervalById(int intervalId)
        {
            var selectedInterval =
              _intervalsRepository.GetSingleIntervalById(intervalId);
            
            if (selectedInterval == null) NotFound("Couldn't find an interval with that id");

            var modes = _intervalsRepository.GetModesByIntervalId(intervalId);
            var chords = _intervalsRepository.GetChordsByIntervalId(intervalId);
            var shapes = _intervalsRepository.GetShapesByIntervalId(intervalId);

            var result = new IntervalViewModel
            {
                IntervalId = selectedInterval.IntervalId,
                IntervalName = selectedInterval.IntervalName,
                Chords = chords,
                Modes = modes,
                Shapes = shapes
            };

            return Ok(result);
        }

        //api/intervals/chord/{chordId}
        [HttpGet("chord/{chordId}")]
        public IActionResult GetChordById(int chordId)
        {
            var selectedChord =
              _intervalsRepository.GetSingleChordById(chordId);
            if (selectedChord == null) return NotFound("Can't strike a chord with that id");
            return Ok(selectedChord);
        }

        //api/intervals/mode/{modeId}
        [HttpGet("mode/{modeId}")]
        public IActionResult GetModeById(int modeId)
        {
            var selectedMode =
              _intervalsRepository.GetSingleModeById(modeId);
            if (selectedMode == null) return NotFound("Couldn't find a mode with that id");
            return Ok(selectedMode);
        }

        //api/intervals/mode/{modeId}
        [HttpGet("mode/{modeId}/image")]
        public IActionResult GetModeImageById(int modeId)
        {
            var selectedMode =
              _intervalsRepository.GetSingleModeById(modeId);
            if (selectedMode == null) return NotFound("Couldn't find a mode image with that id");
            return File(selectedMode.ModeImg, "image / png");
        }

        //api/intervals/mode/{modeId}
        [HttpGet("shape/{shapeId}")]
        public IActionResult GetIntervalShapeById(int shapeId)
        {
            var selectedInterval =
              _intervalsRepository.GetSingleIntervalShapeById(shapeId);
            if (selectedInterval == null) return NotFound("Couldn't find an interval shape with that id");
            return Ok(selectedInterval);
        }

        //api/intervals/mode/{modeId}
        [HttpGet("shape/{shapeId}/image")]
        public IActionResult GetIntervalShapeImageById(int shapeId)
        {
            var selectedInterval =
              _intervalsRepository.GetSingleIntervalShapeById(shapeId);
            if (selectedInterval == null) return NotFound("Couldn't find an interval shape image with that id");
            return File(selectedInterval.ShapeImgFile, "image / png");
        }
    }
}