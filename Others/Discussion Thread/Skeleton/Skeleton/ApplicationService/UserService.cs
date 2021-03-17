using Skeleton.DataApi;
using Skeleton.Repository;
using Skeleton.Resources;
using System.Threading.Tasks;

namespace Skeleton.ApplicationService
{
    public class UserService : IUserService
    {
        private IUserRepository repository;

        public UserService()
        {
            repository = new UserRepository();
        }

        public async Task<UserResource> GetUser(string firstName, string lastName)
        {
            var userEntity = await repository.Get(firstName, lastName);
            return new UserResource
            {
                FirstName = userEntity.FirstName,
                LastName = userEntity.LastName,
                IsSpecial = userEntity.IsSpecial,
                Age = userEntity.Age,
                Gender = userEntity.Gender
            };
        }

        public async Task<UserResource> CreateOrUpdate(UserResource userResource)
        {
            await repository.InsertOrUpdate(userResource);
            return userResource;
        }

        public async Task Delete(string firstName, string lastName)
        {
            await repository.Delete(firstName, lastName);
        }
    }
}
