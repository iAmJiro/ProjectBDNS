using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Dtos
{
    public class GetCategoryResponse
    {
        public GetCategoryResponse(Category category)
        {
            CategoryId = category.CategoryId;
            Name = category.Name;
        }

        public int CategoryId { get; set; }
        public string Name { get; set; } = default!;
    }
}