using Azure;
using Azure.Data.Tables;

namespace Workout.DataApi.Entities
{
    public class UserEntity : ITableEntity
    {
        public string PartitionKey { get; set; }    
        public string RowKey { get; set; }
        public DateTimeOffset? Timestamp
        {
            get;
            set;
        }

        public ETag ETag { get; set; }

        public Guid UserId { get; set; }
        public string UserName { get; set; }
        public UserEntity() { }
        public UserEntity(Guid userId)
        {
            PartitionKey = userId.ToString(); 
            RowKey = userId.ToString();
            UserId = userId;
        }
    }
}
