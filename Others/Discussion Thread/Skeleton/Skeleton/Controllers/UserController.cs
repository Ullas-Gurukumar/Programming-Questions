using Microsoft.AspNetCore.Mvc;
using Skeleton.ApplicationService;
using Skeleton.Resources;
using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace Skeleton.Controllers
{
    [Route("v1/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService userService;

        public UserController()
        {
            userService = new UserService();
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserRequest userRequest)
        {
            Enum.TryParse<Gender>(userRequest.Gender, true, out var gender);

            var userResource = new UserResource
            {
                FirstName = userRequest.FirstName,
                LastName = userRequest.LastName,
                Age = userRequest.Age,
                Gender = gender.ToString()
            };

            var result = await userService.CreateOrUpdate(userResource);
            return Ok(result);
        }

        [HttpGet("{firstName}/{lastname}")]
        public async Task<IActionResult> GetUser(string firstName, string lastName)
        {
            var result = await userService.GetUser(firstName, lastName);
            return Ok(result);
        }

        [HttpDelete("{firstName}/{lastname}")]
        public async Task<IActionResult> DeleteUser(string firstName, string lastName)
        {
            await userService.Delete(firstName, lastName);
            return NoContent();
        }
    }

    enum Gender
    {
        Unknown,
        Male,
        Female,
        X
    }

    public class UserRequest
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
    }
}