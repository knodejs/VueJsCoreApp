using Newtonsoft.Json;

namespace VueJsCoreApp.Models
{
    public class ShrinkResponse
    {
        [JsonProperty("shrunkUrl")]
        public ShrunkUrl ShrunkUrl { get; set; }
    }
}