using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using StripeSkeleton.Clients;

namespace StripeSkeleton.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private BitmapClient bitmapClient;

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
            bitmapClient = new BitmapClient();
        }

        [HttpGet(Name = "GetJson")]
        public Ride GetJson()
        {
            //using (StreamReader file = File.OpenText("E:\\Repos\\bikemap\\ride-simple.json"))
            return JsonConvert.DeserializeObject<Ride>(System.IO.File.ReadAllText("E:\\Repos\\bikemap\\ride-simple.json"));
        }

        [HttpGet("image")]
        public async Task<int> Getpng()
        {
            return await bitmapClient.PostData();
        }
    }

    public class Ride
    {
        public string Type { get; set; }    
        public List<Feature> features { get; set; }   
    }

    public class Feature
    {
        public string Type { get; set; }
        public dynamic? Properties { get; set; }
        public Geometry geometry { get; set; }
    }

    public class Geometry
    {
        public string Type { get; set; }
        //public List<(double, double)> Coordinates { get; set; }
        public List<List<double>> Coordinates { get; set; }
    }
}