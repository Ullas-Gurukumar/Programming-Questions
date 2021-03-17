using Microsoft.Azure.Cosmos.Table;

namespace Skeleton.TableStorage.Entities
{
    public class UserEntity : TableEntity
    {
        public UserEntity() { }

        public UserEntity(string firstName, string lastName)
        {
            PartitionKey = firstName;
            RowKey = lastName;
            FirstName = firstName;
            LastName = lastName;
        }

        public bool IsSpecial { get; set; }
        public int Age { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
    }
}
