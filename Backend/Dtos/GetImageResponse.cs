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
            Src = image.Src;
            Alt = image.Alt;
            Name = image.Name;
            Price = image.Price;

            // Category = new GetCategoryResponse(image.Category!);
            Category = new GetCategoryResponse(image.Categories!);

        }

        public int ImageId { get; set; }
        public string Src { get; set; } = default!;
        public string Alt { get; set; } = default!;
        public string Name { get; set; } = default!;
        public decimal Price { get; set; } = default!;

        public GetCategoryResponse Category { get; set; } = default!;
    }
}