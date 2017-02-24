using FitnessForumProject.Models;
using FitnessForumProject.Repository;
using System.Collections.Generic;
using System.Linq;


namespace FitnessForumProject.Services
{
    public class ForumService : IForumService
    {
        private IGenericRepository _repo;

        public ForumService(IGenericRepository repo)
        {
            _repo = repo;
        }

        public List<Topic> GetAllTopics()
        {
            var topics = _repo.Query<Topic>().ToList();
            return topics;
        }

        public List<SubTopic> SubTopicsByTopic(int id)
        {
            var subtopics = _repo.Query<SubTopic>().Where(st => st.Topic.Id == id).ToList();
            return subtopics;
        }

        public List<Comment> CommentsBySubTopic(int id)
        {
            var comments = _repo.Query<Comment>().Where(c => c.Subtopic.Id == id).ToList();
            return comments;
        }

        public SubTopic GetSubTopicId(int id)
        {
            var subtopicid = _repo.Query<SubTopic>().Where(st => st.Id == id).FirstOrDefault();
            return subtopicid;
        }
       

        public void AddTopic(Topic topic)
        {
            _repo.Add(topic);
        }

        public void EditTopic(Topic topic)
        {
            _repo.Update(topic);
        }

        public void AddSubTopic(SubTopic subtopic, int id)
        {
            
        }

        public void EditSubTopic(SubTopic subtopic)
        {
            _repo.Update(subtopic);
        }

    }
}
