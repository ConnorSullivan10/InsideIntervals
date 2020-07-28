using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InsideIntervals.api.Models;
using Dapper;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Identity;


namespace InsideIntervals.api.DataAccess
{
    public class IntervalsRepo
    {
        string connectionString;
        public IntervalsRepo(IConfiguration config)
        {
            connectionString =
              config.GetConnectionString("InsideIntervals");
        }

        public Interval GetSingleIntervalById(int intervalId)
        {
            var sql = @"Select * 
                        FROM Interval
                        Where IntervalId = @intervalId";

            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new { IntervalId = intervalId };
                var interval = db.QueryFirstOrDefault<Interval>(sql, parameters);
                return interval;
            }
        }

        public Mode GetSingleModeById(int modeId)
        {
            var sql = @"Select * 
                        FROM Mode
                        Where ModeId = @modeId";

            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new { ModeId = modeId };
                var mode = db.QueryFirstOrDefault<Mode>(sql, parameters);
                return mode;
            }
        }

        public List<Mode> GetModesByIntervalId(int intervalId)
        {
            var modes = GetSingleIntervalById(intervalId).ModeIds;
            if (modes != null) { 
                var result = modes.Split(',')
                .Select(c => GetSingleModeById(int.Parse(c))).ToList();
                return result;
            }
            else
            {
                List<Mode> emptyList = new List<Mode>();
                return emptyList;
            }
        }
        public Chord GetSingleChordById(int chordId)
        {
            var sql = @"Select * 
                        FROM Chord
                        Where ChordId = @chordId";

            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new { ChordId = chordId };
                var chord = db.QueryFirstOrDefault<Chord>(sql, parameters);
                return chord;
            }
        }

        public List<Chord> GetChordsByIntervalId(int intervalId)
        {
            var chords = GetSingleIntervalById(intervalId).ChordIds;
            if (chords != null) { 
                var result = chords.Split(',')
                .Select(c => GetSingleChordById(int.Parse(c))).ToList();
                return result;
            }
            else
            {
                List<Chord> emptyList = new List<Chord>();
                return emptyList;
            }
        }


        public IntervalShape GetSingleIntervalShapeById(int shapeId)
        {
            var sql = @"Select * 
                        FROM IntervalShape
                        Where ShapeId = @shapeId";

            using (var db = new SqlConnection(connectionString))
            {
                var parameters = new { ShapeId = shapeId };
                var shape = db.QueryFirstOrDefault<IntervalShape>(sql, parameters);
                return shape;
            }
        }

        public List<IntervalShape> GetShapesByIntervalId(int intervalId)
        {
            var shapes = GetSingleIntervalById(intervalId).IntervalShapeIds;
            if (shapes != null)
            { 
                var result = shapes.Split(',')
                    .Select(c => GetSingleIntervalShapeById(int.Parse(c))).ToList();
                return result;
            }
            else
            {
                List<IntervalShape> emptyList = new List<IntervalShape>();
                return emptyList;
            }
        }
    }
}
