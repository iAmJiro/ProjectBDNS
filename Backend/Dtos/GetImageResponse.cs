using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Dtos
{
    public class GetImageResponse
    {
        public GetImageResponse(Image image){
            ImageId = image.ImageId;
            ImageUrls = image.ImageUrls;
            Name = image.Name;
            Description = image.Description;
            Price = image.Price;

            // Category = new GetCategoryResponse(image.Category!);
            Category = new GetCategoryResponse(image.Category!);

        }

        public int ImageId { get; set; }
        public List<string> ImageUrls { get; set; } = new();
        public string Name { get; set; } = default!;
        public string Description { get; set; } = default!;
        public decimal Price { get; set; } = default!;

        public GetCategoryResponse Category { get; set; } = default!;
    }
}