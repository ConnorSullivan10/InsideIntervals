using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsideIntervals.api.DataAccess
{
    public class IntervalsRepo
    {
        string ConnectionString;

        public IntervalsRepo(IConfiguration config)
        {
            ConnectionString =
              config.GetConnectionString("InsideIntervals");
        }
    }
}
