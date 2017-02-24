using Microsoft.AspNetCore.Mvc;
using FitnessForumProject.Services;
using FitnessForumProject.Models;
using System.Net.Http;

namespace FitnessForumProject.API
{
    [Route("api/[controller]")]
    public class ForumController : Controller
    {
        private IForumService _service;

        public ForumController(IForumService service)
        {
            _service = service;
        }


        [HttpGet]
        public IActionResult Get()
        {
            var topics = _service.GetAllTopics();
            return Ok(topics);
        }


        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var subtopics = _service.SubTopicsByTopic(id);
            return Ok(subtopics);
        }

        [HttpGet("comments/{id}")]
        public IActionResult GetComments(int id)
        {
            var comments = _service.CommentsBySubTopic(id);
            return Ok(comments);
        }

        [HttpGet("subtopic/{id}")]
        public IActionResult GetSubTopicId(int id)
        {
            var subtopicid = _service.GetSubTopicId(id);
            return Ok(subtopicid);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Topic topic)
        {
            if (topic == null)
            {
                return BadRequest();
            }
            else if (topic.Id == 0)
            {
                _service.AddTopic(topic);
                return Ok();
            }
            else
            {
                _service.EditTopic(topic);
                return Ok();
            }
        }

        //[HttpPost("addsubtopic")]
        //public HttpResponseMessage Post([FromBody]SubTopic subtopic, [FromBody] int id)
        //{
            
            
        //    //   var sub= _service.AddSubTopic(subtopic,id);
        //    //return sub;

                
            
        //}
    }
}
