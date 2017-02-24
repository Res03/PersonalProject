﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitnessForumProject.Models
{
    public class Topic
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<SubTopic> SubTopics { get; set; }
        public ApplicationUser User { get; set; }
    }
}
