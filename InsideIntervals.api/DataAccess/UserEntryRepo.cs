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

        public UserEntry DeleteUserEntryUpload(int entryId)
        {
            var sql = @"DELETE From UserProfileEntry
                        OUTPUT DELETED.*
                        WHERE EntryId = @entryId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { EntryId = entryId };

                var results = db.QueryFirstOrDefault<UserEntry>(sql, parameters);
                return results;
            }
        }

        public IEnumerable<UploadedFile> DeleteUserFile(int fileId)
        {
            var sql = @"DELETE From Files
                        OUTPUT DELETED.*
                        WHERE Files.Id = @fileId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { FileId = fileId };

                var results = db.Query<UploadedFile>(sql, parameters);
                return results;
            }
        }


    }
}
