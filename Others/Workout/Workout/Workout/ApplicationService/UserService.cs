using Functional;
using Workout.DataApi;
using Workout.DataApi.Entities;

namespace Workout.ApplicationService
{
    public class UserService
    {
        private UserRespository userRepository;

        public UserService()
        {
            userRepository = new UserRespository();
        }

        public async Task<Result<UserEntity, Failure>> GetUser(Guid userId) => await userRepository.GetUser(userId).MapOnFailure(storageFailure => (Failure) storageFailure);
        public async Task<Result<Unit, Failure>> DeleteUser(Guid userId) => await userRepository.DeleteUser(userId).MapOnFailure(storageFailure => (Failure)storageFailure);
        public async Task<Result<UserEntity, Failure>> CreateUser(string name) 
        {
            var userId = Guid.NewGuid();
            var userEntity = new UserEntity(userId)
            {
                UserName = name,
            };

            return await userRepository.CreateUser(userEntity).MapOnFailure(storageFailure => (Failure) storageFailure);
        }
        public async Task<Result<UserEntity, Failure>> UpdateUser(Guid userId, string name)
        {
            var userEntity = new UserEntity(userId)
            {
                UserName = name,
            };

            return await userRepository.UpsertUser(userEntity).MapOnFailure(storageFailure => (Failure) storageFailure);
        }

    }
    
}
