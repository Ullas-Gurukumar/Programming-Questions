using Functional;
using PublicAPI.Clients;
using System.Linq;

namespace PublicAPI.ApplicationService
{
    public class PublicAPIService
    {
        private PublicAPIsClient publicAPIsClient;
        public PublicAPIService()
        {
            publicAPIsClient = new PublicAPIsClient();
        }

        public async Task<Result<EntriesResponse, Exception>> GetEntries()
        {
            return await publicAPIsClient.GetEntries();
        }

        public async Task<Result<EntriesResponse, Exception>> GetFilteredEntries(string? api, string? auth, bool? https, string? cors, string? category)
        {
            return await publicAPIsClient.GetEntries()
                .Select(entriesResponse => AppleFilter(entriesResponse, api, auth, https, cors, category));
        }

        private EntriesResponse AppleFilter(EntriesResponse entriesResponse, string? api, string? auth, bool? https, string? cors, string? category)
        {
            if (!String.IsNullOrEmpty(api))
            {
                entriesResponse.entries = entriesResponse.entries?.Where(entry => entry.API == api).ToList();
            }
            if (!String.IsNullOrEmpty(auth))
            {
                entriesResponse.entries = entriesResponse.entries?.Where(entry => entry.Auth == auth).ToList();
            }
            if (https != null)
            {
                entriesResponse.entries = entriesResponse.entries?.Where(entry => entry.HTTPS == https).ToList();
            }
            if (!String.IsNullOrEmpty(cors))
            {
                entriesResponse.entries = entriesResponse.entries?.Where(entry => entry.Cors == cors).ToList();
            }
            if (!String.IsNullOrEmpty(category))
            {
                entriesResponse.entries = entriesResponse.entries?.Where(entry => entry.Category.Contains(category)).ToList();
            }
            entriesResponse.Count = entriesResponse.entries?.Count ?? 0;
            return entriesResponse;
        }
    }
}
