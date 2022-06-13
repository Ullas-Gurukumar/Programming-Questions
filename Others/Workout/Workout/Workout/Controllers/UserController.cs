using Functional;
using Microsoft.AspNetCore.Mvc;
using Workout.ApplicationService;

namespace Workout.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UserController : Controller
    {
        private UserService userService;
        public UserController()
        {
            userService = new UserService();
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> Get(Guid userId)
        {
            return await userService.GetUser(userId).Match(success => Ok(success), failure => throw failure.ToException());
        }

        [HttpDelete("{userId}")]
        public async Task<IActionResult> Delete(Guid userId)
        {
            return await userService.DeleteUser(userId).Match(_ => NoContent(), failure => throw failure.ToException());
        }

        [HttpPost()]
        public async Task<IActionResult> Create([FromBody] UserRequest user)
        {
            return await userService.CreateUser(user.name).Match(success => Ok(success), failure => throw failure.ToException());
        }

        [HttpPost("{userId}")]  
        public async Task<IActionResult> Create(Guid userId,[FromBody] UserRequest user)
        {
            return await userService.UpdateUser(userId, user.name).Match(success => Ok(success), failure => throw failure.ToException());
        }
    }

    public class UserRequest
    {
        public string name { get; set; }    
    }
}
