using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class FAQ
    {
        public int FAQId { get; set; }
        public string? FAQQuestion { get; set; }
        public string? FAQAnswer { get; set; }
    }
}