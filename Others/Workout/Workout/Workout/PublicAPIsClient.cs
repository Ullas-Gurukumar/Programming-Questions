using Functional;

namespace Workout
{
    public class PublicAPIsClient
    {
        private readonly HttpClient client;
        private readonly string baseURL = "https://api.publicapis.org";
        public PublicAPIsClient()
        {
            client = new HttpClient();
        }

        public async Task<Result<EntriesResponse, Exception>> GetEntries()
        {
            try
            {
                //var response = await client.GetAsync($"{baseURL}/entries");

                //return await response.Content.ReadFromJsonAsync<EntriesResponse>();

                var entriesResponse = await client.GetFromJsonAsync<EntriesResponse>($"{baseURL}/entries");

                return Result.Success<EntriesResponse, Exception>(entriesResponse);
            }
            catch (HttpRequestException e)
            {
                return Result.Failure<EntriesResponse, Exception>(e);
            }
        }
    }

    public class EntriesResponse
    {
        public int Count { get; set; }
        public List<Entries>? entries { get; set; }
    }

    public class Entries
    {
        public string? API { get; set; }
        public string? Description {  get; set; }
        public string? Auth { get; set; }
        public bool HTTPS { get; set; }
        public string? Cors { get; set; }
        public string? Link { get; set; }
        public string? Category { get; set; }
    }
}
