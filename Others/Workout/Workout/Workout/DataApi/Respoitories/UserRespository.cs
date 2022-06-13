using Azure.Data.Tables;
using Functional;
using Workout.Data.TableStorage;
using Workout.DataApi.Entities;

namespace Workout.DataApi
{
    public class UserRespository
    {
        private FunctionalTableStorage tableStorage;
        private string tableName => "Users";
        public UserRespository()
        {
            tableStorage = new FunctionalTableStorage();
        }
        
        public async Task<Result<UserEntity, StorageFailure>> GetUser(Guid userId) => await tableStorage.Get<UserEntity>(tableName, userId.ToString(), userId.ToString());
        public async Task<Result<UserEntity, StorageFailure>> UpsertUser(UserEntity entity) => await tableStorage.Upsert(tableName, entity);
        public async Task<Result<Unit, StorageFailure>> DeleteUser(UserEntity entity) => await tableStorage.Delete(tableName, entity.PartitionKey, entity.RowKey);
        public async Task<Result<Unit, StorageFailure>> DeleteUser(Guid userId) => await tableStorage.Delete(tableName, userId.ToString(), userId.ToString());
        public async Task<Result<UserEntity, StorageFailure>> CreateUser(UserEntity entity) => await tableStorage.Create(tableName, entity);
    }
}
