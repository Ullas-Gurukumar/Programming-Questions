using Skeleton.Resources;
using Skeleton.TableStorage.Entities;
using System.Threading.Tasks;

namespace Skeleton.DataApi
{
    public interface IUserRepository
    {
        Task InsertOrUpdate(UserResource user);
        Task<UserEntity> Get(string firstName, string lastName);
        Task Delete(string firstName, string lastName);
    }
}
