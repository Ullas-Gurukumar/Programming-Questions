using Skeleton.DataApi;
using Skeleton.Resources;
using Skeleton.TableStorage;
using Skeleton.TableStorage.Entities;
using System;
using System.Threading.Tasks;

namespace Skeleton.Repository
{
    public class UserRepository : IUserRepository
    {
        private string tableName => "Users";
        private TableStorageExecutor tableStorage;

        public UserRepository()
        {
            tableStorage = new TableStorageExecutor("UseDevelopmentStorage=true");
        }

        public async Task InsertOrUpdate(UserResource user)
        {
            var userEntity = new UserEntity(user.FirstName, user.LastName)
            {
                IsSpecial = user.IsSpecial,
                Age = user.Age,
                Gender = user.Gender.ToString()
            };

            await tableStorage.InsertOrMerge(tableName, userEntity);
        }

        public async Task<UserEntity> Get(string firstName, string lastName)
        {
            var result = await tableStorage.Get<UserEntity>(tableName, firstName, lastName);

            if (result == null)
            {
                return null;
            }

            return result.Result as UserEntity;
        }

        public async Task Delete(string firstName, string lastName)
        {
            var entity = await Get(firstName, lastName);

            if (entity == null)
            {
                throw new Exception("This doesn't exist! :(");
            }

            await tableStorage.Delete(tableName, entity);
        }
    }
}
