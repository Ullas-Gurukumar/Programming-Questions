using Newtonsoft.Json;

namespace StripeSkeleton.Clients
{
    public class BitmapClient
    {
        private readonly HttpClient client;
        private readonly string baseURL = "https://stripe-bikemap.appspot.com";

        public BitmapClient()
        {
            client = new HttpClient();
        }

        public async Task<int> PostData()
        {
            try
            {
                var basePath = "E:\\Repos\\Programming-Questions\\Interviews\\Stripe\\Final Round\\StripeSkeleton\\StripeSkeleton\\Clients";
                var body = JsonConvert.DeserializeObject <PostBody> (File.ReadAllText($"{basePath}\\ExampleBody.json"));
                var response = await client.PostAsJsonAsync($"{baseURL}/map.png", body);
                var bytes = await response.Content.ReadAsByteArrayAsync();
                File.WriteAllBytes($"{basePath}\\bikemap2.png", bytes);
                return (int) response.StatusCode;
            } catch (HttpRequestException ex)
            {
                Console.WriteLine(ex.Message);
                return -1;
            }
        }
    }

    public class PostBody
    {
        public GeoLocation Center { get; set; } 
        public int Width { get; set; }  
        public int Height { get; set; } 
        public int Zoom { get; set; }
        public List<Marker> markers { get; set; }

        public List<Path> paths { get; set; }
    }

    public class GeoLocation
    {
        public double Lat { get; set; }
        public double Lon { get; set; }   
    }

    public class Marker
    {
        public string? Color { get; set; }
        public string? Label { get; set; }
        public GeoLocation Coord { get; set; }  
    }

    public class Path
    {
        public string Color { get; set; }
        public List<GeoLocation> Positions { get; set; }
    }
}
