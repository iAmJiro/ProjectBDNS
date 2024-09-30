using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class UpdateFAQRequest
    {
         public string? FAQQuestion { get; set; }
        public string? FAQAnswer { get; set; }
    }
}