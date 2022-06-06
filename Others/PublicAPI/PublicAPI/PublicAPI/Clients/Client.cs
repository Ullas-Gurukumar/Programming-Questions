using Functional;

namespace PublicAPI.Clients
{
    public class Client
    {
        private readonly HttpClient client;
        private readonly string baseURL = "https://api.publicapis.org";
        public Client(string url)
        {
            baseURL = url;
            client = new HttpClient();
        }

        //public async Task<Result<TSuccess, TFailure>> Get(string route) 
        //{
        //    try
        //    {
        //        TSuccess entriesResponse = await client.GetFromJsonAsync<TSuccess>($"{baseURL}/{route}");

        //        return Result.Success<TSuccess, TFailure>(entriesResponse);
        //    }
        //    catch (HttpRequestException e)
        //    {
        //        return Result.Failure<TSuccess, TFailure>(e);
        //    }
        //}
    }
}
