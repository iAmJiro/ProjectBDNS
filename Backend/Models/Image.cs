using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Image
    {
        public int ImageId { get; set; }
        public List<string> ImageUrls { get; set; } = default!;
        public string Name { get; set; } = default!;
        public string Description { get; set; } = default!;
        public decimal Price { get; set; } = default!;

//
        public int CategoryId { get; set; }
        public Category? Category { get; set; }
    }
}