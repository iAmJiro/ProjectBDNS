using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Role
    {
         public int RoleId { get; set; }
        public string Name { get; set; } = default!;
        public List<User> Users { get; set; } = new();
    }
}