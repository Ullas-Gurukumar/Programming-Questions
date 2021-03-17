using Microsoft.AspNetCore.Mvc;
using Skeleton.ApplicationService;
using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace Skeleton.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiscussionController : ControllerBase
    {
        private DiscussionService discussionService;

        public DiscussionController()
        {
            discussionService = new DiscussionService();
        }

        [HttpPost]
        public async Task<IActionResult> PostDiscussion([FromBody] DiscussionRequest request)
        {
            var identifier = await discussionService.Insert(request.Content, request.ParentId, request.RootId);
            return Ok(new { Id = identifier });
        }

        [HttpGet("{rootId:Guid}")]
        public async Task<IActionResult> GetDiscussion(Guid? rootId)
        {
            var entity = await discussionService.GetDiscussion(rootId, rootId);
            return Ok(new
            {
                entity.Id,
                entity.ParentId,
                entity.RootId,
                entity.Content,
                entity.CreatedAt
            });
        }

        [HttpGet("{rootId:Guid}/{parentId:Guid}")]
        public async Task<IActionResult> GetDiscussion(Guid rootId, Guid parentId)
        {
            var entity = await discussionService.GetDiscussion(rootId, parentId);
            return Ok(new
            {
                entity.Id,
                entity.ParentId,
                entity.RootId,
                entity.Content,
                entity.CreatedAt
            });
        }
    }

    public class DiscussionRequest
    {
        [Required(AllowEmptyStrings = false)]
        public string Content { get; set; }
        public Guid? ParentId { get; set; }
        public Guid? RootId { get; set; }
    }
}