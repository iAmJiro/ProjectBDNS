using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Image> Images { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>().HasData(
                new Role
                {
                    RoleId = 1,
                    Name = "admin",
                },
                new Role
                {
                    RoleId = 2,
                    Name = "user",
                }
            );

            modelBuilder.Entity<User>().HasData(
                new User
                {
                    RoleId = 1,
                    UserId = 1,
                    Username = "admin",
                    Password = "admin",
                },
                new User
                {
                    RoleId = 2,
                    UserId = 2,
                    Username = "user",
                    Password = "user",
                }
           );

            modelBuilder.Entity<Category>().HasData(
             new Category
             {
                 CategoryId = 1,
                 Name = "Cake",
             },
             new Category
             {
                 CategoryId = 2,
                 Name = "Cupcake",
             },
             new Category
             {
                 CategoryId = 3,
                 Name = "Cookie",
             }
            );

            modelBuilder.Entity<Image>().HasData(
                new Image{
                    CategoryId = 1,
                    ImageId = 1,
                    Src = "",
                    Alt = "",
                },
                new Image{
                    CategoryId = 2,
                    ImageId = 2,
                    Src = "",
                    Alt = "",
                },
                new Image{
                    CategoryId = 3,
                    ImageId = 3,
                    Src = "",
                    Alt = "",
                }
            );


        }
    }
}