using System;
using System.Collections.Generic;

using System.Linq;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Dtos
{
    public class CreateImageRequest
    {
        public List<string> ImageUrls { get; set; } = new();
        public string Name { get; set; } = default!;
        public string Description { get; set; } = default!;
        public decimal Price { get; set; } = default!;

        public int CategoryId { get; set; }

        public Image ConverToItemModel(){
            return new Image{
                ImageUrls = ImageUrls,
                Name = Name,
                Description = Description,
                Price = Price,
                CategoryId = CategoryId,
            };
        }
    }
}