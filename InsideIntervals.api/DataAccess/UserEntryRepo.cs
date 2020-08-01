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

        public UserEntry AddUserEntry(UserEntry entryToAdd)
        {
            var sql = @"insert into UserProfileEntry(FirebaseUid,EntryName,EntryInput,UploadedFileId)
                        output inserted.*
                        values(@FirebaseUid,@EntryName,@EntryInput,@UploadedFileId)";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<UserEntry>(sql, entryToAdd);
                return result;
            }
        }

        public IEnumerable<UserEntry> GetUserEntriesByFirebaseUid(string firebaseUid)
        {
            var sql = @"Select * From UserProfileEntry Where FirebaseUid = @firebaseUid";

            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<UserEntry>(sql, new { FirebaseUid = firebaseUid });
            }

        }


        public UploadedFile GetFileById(int fileId)
        {
            var sql = @"Select * From Files Where Id = @fileId";

            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirst<UploadedFile>(sql, new { fileId = fileId });
            }

        }

        public IEnumerable<UserEntry> DeleteUserEntry(int id)
        {
            var sql = @"DELETE From UserProfileEntry
                        WHERE UserProfileEntry.EntryId = @id";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { Id = id };

                var results = db.Query<UserEntry>(sql, parameters);
                return results;
            }
        }

        //public IEnumerable<UserEntry> DeleteAllUserEntries(int id)
        //{
        //    var sql = @"UPDATE p
        //                SET AccountNo = null
        //                FROM PaymentType p
	       //                 JOIN [User] u
		      //                  ON u.UserId = p.UserId
			     //                   WHERE u.UserId = @id";

        //    using (var db = new SqlConnection(ConnectionString))
        //    {
        //        var parameters = new { Id = id };

        //        var results = db.Query<UserEntry>(sql, parameters);
        //        return results;
        //    }
        //}

        //public IEnumerable<UserEntry> DeleteUserFile(int fileId)
        //{
        //    var sql = @"DELETE From Files
        //                WHERE Files.Id = @fileId";

        //    using (var db = new SqlConnection(ConnectionString))
        //    {
        //        var parameters = new { FileId = fileId };

        //        var results = db.Query<UserEntry>(sql, parameters);
        //        return results;
        //    }
        //}


    }
}
