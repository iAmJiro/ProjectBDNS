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

            // Category = new GetCategoryResponse(image.Category!);
            Category = new GetCategoryResponse(image.Categories!);

        }

        public int ImageId { get; set; }
        public string Src { get; set; } = default!;
        public string Alt { get; set; } = default!;

        public GetCategoryResponse Category { get; set; } = default!;
    }
}