using Skeleton.Data.Entities;
using Skeleton.Data.Repository;
using System;
using System.Threading.Tasks;

namespace Skeleton.ApplicationService
{
    public class DiscussionService
    {
        private DiscussionRespository repository;

        public DiscussionService()
        {
            repository = new DiscussionRespository();
        }

        public async Task<Guid> Insert(string content, Guid? parentId, Guid? rootId)
        {
            return await repository.InsertOrUpdate(content, parentId, rootId, DateTime.UtcNow);
        }

        public async Task<DiscussionEntity> GetDiscussion(Guid? rootId, Guid? parentId)
        {
            return await repository.Get(rootId, parentId);
        }
    }
}
