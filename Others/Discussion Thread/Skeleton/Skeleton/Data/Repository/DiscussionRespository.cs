using Microsoft.Azure.Cosmos.Table;
using Skeleton.Data.Entities;
using Skeleton.TableStorage;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Skeleton.Data.Repository
{
    public class DiscussionRespository
    {
        private string tableName => "Discussion";
        private TableStorageExecutor tableStorage;
        public DiscussionRespository()
        {
            tableStorage = new TableStorageExecutor("UseDevelopmentStorage=true");
        }

        public async Task<Guid> InsertOrUpdate(string content, Guid? parentId, Guid? rootId, DateTime utcDateTime)
        {
            var discussionEntity = new DiscussionEntity(content, parentId, rootId)
            {
                CreatedAt = utcDateTime,
            };

            await tableStorage.InsertOrMerge(tableName, discussionEntity);

            return discussionEntity.Id;
        }

        public async Task<DiscussionEntity> Get(Guid? rootId, Guid? parentId)
        {
            var result = await tableStorage.Get<DiscussionEntity>(tableName, rootId.ToString(), parentId.ToString());

            if (result == null)
            {
                return null;
            }

            return result.Result as DiscussionEntity;
        }

        public async Task<IEnumerable<DynamicTableEntity>> GetAll()
        {
            var query = new TableQuery<DiscussionEntity>();

            return await tableStorage.GetMultiple<DiscussionEntity>(tableName, query);
        }
    }
}
