using LiteDB;
using Newtonsoft.Json;

namespace VueJsCoreApp.Models
{
    public class DatabaseObject
    {
        [JsonIgnore]
        [BsonId]
        public ObjectId DatabaseId { get; set; }
    }
}