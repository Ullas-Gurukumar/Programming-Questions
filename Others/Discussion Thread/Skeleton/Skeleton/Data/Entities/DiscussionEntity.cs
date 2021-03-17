using Microsoft.Azure.Cosmos.Table;
using System;
using System.Collections.Generic;

namespace Skeleton.Data.Entities
{
    public class DiscussionEntity : TableEntity
    {
        public DiscussionEntity() { }
        public DiscussionEntity(string content, Guid? parentId = null, Guid? rootId = null)
        {
            Guid newGuid;
            newGuid = Guid.NewGuid();
            if (rootId == null && ParentId == null)
            {

                rootId = newGuid;
                parentId = newGuid;
            }

            PartitionKey = $"{rootId}_{parentId}";
            RowKey = newGuid.ToString();
            Id = newGuid;
            Content = content;
            ParentId = parentId;
            RootId = rootId;
        }

        public Guid Id { get; set; }
        public Guid? ParentId { get; set; }
        public Guid? RootId { get; set; }
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; }
        public List<Guid> Children { get; set; }
    }
}
