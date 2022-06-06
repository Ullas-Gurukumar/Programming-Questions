using Functional;
using Microsoft.AspNetCore.Mvc;
using PublicAPI.ApplicationService;
using PublicAPI.Clients;

namespace PublicAPI.Controllers
{
    [ApiController]
    [Route("/")]
    public class PublicAPIController : ControllerBase
    {
        private PublicAPIService service;
        public PublicAPIController()
        {
            service = new PublicAPIService();   
        }

        [HttpGet("/entries")]
        public async Task<IActionResult> GetEntries()
        {
            return await service.GetEntries()
                .Match<EntriesResponse,Exception,IActionResult>(success => Ok(success), _ => NotFound());
        }

        [HttpGet("/entries/filter")]
        public async Task<IActionResult> GetFilteredEntries(string? api, string? auth, bool? https, string? cors, string? category)
        {
            return await service.GetFilteredEntries(api, auth, https, cors, category)
                .Match<EntriesResponse, Exception, IActionResult>(success => Ok(success), _ => NotFound());
        }
    }
}
