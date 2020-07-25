using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using InsideIntervals.api.Models;
using InsideIntervals.api.Helpers;
using System.Data.SqlClient;

namespace InsideIntervals.api.DataAccess
{
    public class UserEntryRepo
    {
        string ConnectionString;

        public UserEntryRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("InsideIntervals");
        }

        public int Add(UploadedFile file)
        {
            var sql = @"Insert into Files(FileName,FileContent,FileContentType,FileLength)
                        OUTPUT INSERTED.[Id]
                        values (@FileName,@FileContent,@FileContentType,@FileLength)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = (int)db.ExecuteScalar(sql, file);
                return result;
            }
        }

        public UserEntry AddUserEntry(int fileId)
        {
            var sql = @"insert into UserProfileEntry(NumberInStock,Price,Size,Type)
                        output inserted.*
                        values(@NumberInStock,@Price,@Size,@Type)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<UserEntry>(sql, fileId);
                return result;
            }
        }

        public UploadedFile GetById(int fileId)
        {
            var sql = @"Select * From Files Where Id = @fileId";

            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirst<UploadedFile>(sql, new { fileId = fileId });
            }

        }
    }
}
