﻿using LiteDB;

namespace VueJsCoreApp.Services.Database
{
    /// <summary>
    /// A service that contains global database table info, and provides access to the LiteDB store
    /// </summary>
    public static class DatabaseAccessService
    {
        public static string ShrunkUrlCollectionDatabaseKey => "ShrunkUrls";
        public static string RedirectLogDatabaseKey => "RedirectLog";

        private static LiteDatabase _dbInstance;

        public static LiteDatabase OpenOrCreateDefault()
        {
            if (_dbInstance == null)
            {
                _dbInstance = new LiteDatabase("yas_db.lidb");
            }
            return _dbInstance;
        }
    }
}