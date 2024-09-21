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
             }
            );
             modelBuilder.Entity<Image>()
                .Property(p => p.Price)
                .HasColumnType("decimal(18,2)");

            modelBuilder.Entity<Image>().HasData(
                new Image{
                    CategoryId = 1,
                    ImageId = 1,
                    ImageUrls = new List<string> {"/ProjectBDNS/steph/cake1/one.jpg","/ProjectBDNS/steph/cake1/two.jpg","/ProjectBDNS/steph/cake1/three.jpg"},
                    Name = "Pink Cake",
                    Description = "White chocolate and raspberry cake with milk chocolate ganache filling, finished in vanilla buttercream. Gold cherries and 21 written on it. ",
                    Price = 120.00m,
                },
                new Image{
                    CategoryId = 1,
                    ImageId = 2,
                    ImageUrls = new List<string> {"/ProjectBDNS/steph/cake2/one.jpg","/ProjectBDNS/steph/cake2/two.jpg"},
                    Name = "Wood Cake",
                    Description = "Moreish vanilla cake with salted caramel filling and salted caramel buttercream - what a classic combination. ",
                    Price = 150.00m,
                },
                new Image{
                    CategoryId = 2,
                    ImageId = 3,
                    ImageUrls = new List<string> {"/ProjectBDNS/steph/cupcake2/one.jpg","/ProjectBDNS/steph/cupcake2/two.jpg"},
                    Name = "12pk Cupcake",
                    Description =  "Raspberry white chocolate is fast becoming one of my most requested cake flavours! Pair it with a vanilla buttercream and you’re on your way",
                    Price = 85.00m,
                },
                new Image{
                    CategoryId = 2,
                    ImageId = 4,
                    ImageUrls = new List<string> {"/ProjectBDNS/steph/cupcake1/one.jpg","/ProjectBDNS/steph/cupcake1/two.jpg","/ProjectBDNS/steph/cupcake1/three.jpg"},
                    Name = "Bento Box Cupcake",
                    Description =  "You’re welcome to mix and match cupcake flavours Bento box consists of mini cake, 4 cupcakes and 2 sugar cookies",
                    Price = 65.00m,
                }
            );


        }
    }
}