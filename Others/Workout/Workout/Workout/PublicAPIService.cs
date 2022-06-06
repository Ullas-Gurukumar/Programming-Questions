using Functional;

namespace Workout
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
    }
}
