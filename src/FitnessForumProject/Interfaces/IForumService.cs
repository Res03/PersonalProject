using System.Collections.Generic;
using FitnessForumProject.Models;

namespace FitnessForumProject.Services
{
    public interface IForumService
    {
        List<Comment> CommentsBySubTopic(int id);
        List<Topic> GetAllTopics();
        List<SubTopic> SubTopicsByTopic(int id);
        void AddTopic(Topic topic);
        void EditTopic(Topic topic);
        void AddSubTopic(SubTopic subtopic,int id);
        void EditSubTopic(SubTopic subtopic);
        SubTopic GetSubTopicId(int id);
    }
}