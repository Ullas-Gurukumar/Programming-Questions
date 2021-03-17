using Skeleton.Resources;
using System.Threading.Tasks;

namespace Skeleton.ApplicationService
{
    public interface IUserService
    {
        Task<UserResource> GetUser(string firstName, string lastName);
        Task<UserResource> CreateOrUpdate(UserResource userRequest);
        Task Delete(string firstName, string lastName);
    }
}
