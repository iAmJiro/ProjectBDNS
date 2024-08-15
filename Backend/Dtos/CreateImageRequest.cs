using System;
using System.Collections.Generic;

using System.Linq;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Dtos
{
    public class CreateImageRequest
    {
        public string Src { get; set; } = default!;
        public string Alt { get; set; } = default!;

        public int CategoryId { get; set; }

        public Image ConverToItemModel(){
            return new Image{
                Src = Src,
                Alt = Alt,
                CategoryId = CategoryId,
            };
        }
    }
}