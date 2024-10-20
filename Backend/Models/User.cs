using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    [Index("Username", IsUnique = true)]
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; } = default!;
        public string Password { get; set; } = default!;
        public int RoleId { get; set; }
        public Role? Roles { get; set; }
    }
}