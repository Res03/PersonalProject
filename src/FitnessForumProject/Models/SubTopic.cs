using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitnessForumProject.Models
{
    public class SubTopic
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<Comment> Comments { get; set; }
        public ApplicationUser User { get; set; }
        public Topic Topic { get; set; }
    }
}
