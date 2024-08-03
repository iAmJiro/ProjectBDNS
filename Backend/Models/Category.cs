using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; } = default!;

        public List<Image> Images { get; set; } = new();
    }
}