using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Image
    {
        public int ImageId { get; set; }
        public string Src { get; set; } = default!;
        public string Alt { get; set; } = default!;
        public string Name { get; set; } = default!;
        public decimal Price { get; set; } = default!;

//
        public int CategoryId { get; set; }
        public Category? Categories { get; set; }
    }
}