using Functional;

namespace Workout
{
    public class PublicApiController
    {
        private PublicAPIService service;

        public PublicApiController()
        {
            service = new PublicAPIService();
        }

        //public void GetPublicApis(WebApplication app) 
        //{
        //    app.MapGet("/test", async () =>
        //    {
        //        return service.GetEntries().Match(success => { return success; }, e => { return e.ToString(); });
        //    });
        //}
    }
}
