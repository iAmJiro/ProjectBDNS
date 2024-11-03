using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Image> Images { get; set; }

        public DbSet<FAQ> FAQs { get; set; }



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
                    Username = "emmaleerainbird",
                    Password = "CaKesareYum!!231w0s",
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
                    ImageUrls = new List<string> {"../steph/cake1/one.jpg","../steph/cake1/two.jpg","../steph/cake1/three.jpg"},
                    Name = "Pink Cake",
                    Description = "White chocolate and raspberry cake with milk chocolate ganache filling, finished in vanilla buttercream. Gold cherries and 21 written on it. ",
                    Price = 120.00m,
                },
                new Image{
                    CategoryId = 1,
                    ImageId = 2,
                    ImageUrls = new List<string> {"../steph/cake2/one.jpg","../steph/cake2/two.jpg"},
                    Name = "Wood Cake",
                    Description = "Moreish vanilla cake with salted caramel filling and salted caramel buttercream - what a classic combination. ",
                    Price = 150.00m,
                },
                new Image{
                    CategoryId = 2,
                    ImageId = 3,
                    ImageUrls = new List<string> {"../steph/cupcake2/one.jpg","../steph/cupcake2/two.jpg"},
                    Name = "12pk Cupcake",
                    Description =  "Raspberry white chocolate is fast becoming one of my most requested cake flavours! Pair it with a vanilla buttercream and you’re on your way",
                    Price = 85.00m,
                },
                new Image{
                    CategoryId = 2,
                    ImageId = 4,
                    ImageUrls = new List<string> {"../steph/cupcake1/one.jpg","../steph/cupcake1/two.jpg","../steph/cupcake1/three.jpg"},
                    Name = "Bento Box Cupcake",
                    Description =  "You’re welcome to mix and match cupcake flavours Bento box consists of mini cake, 4 cupcakes and 2 sugar cookies",
                    Price = 65.00m,
                }
            );
            modelBuilder.Entity<FAQ>().HasData(
            
                new FAQ
                {
                    FAQId = 1,
                    FAQQuestion = "Do you deliver cakes?",
                    FAQAnswer = "Currently, we offer pick-up only for all orders, Our cakes can be picked up from our Wairarapa location."
                },
                new FAQ
                {
                    FAQId = 2,
                    FAQQuestion = "Can i customize the flavour of my cake?",
                    FAQAnswer = "Yes, you can customize the flavour of your cake. However, we only offer flavours that are availabe on our menu."
                },
                new FAQ
                {
                    FAQId = 3,
                    FAQQuestion = "How long does it take to complete an order?",
                    FAQAnswer = "It usually takes 2-3 weeks to complete a custom cake order. We recommend playing your order well in advance to ensure availability."
                },
                new FAQ
                {
                    FAQId = 4,
                    FAQQuestion = "Can I choose my own cake design?",
                    FAQAnswer = "Yes, you can choose your own cake design. We work with you to create a cake that fits your vision."
                },
                new FAQ
                {
                    FAQId = 5,
                    FAQQuestion = "Can I choose my own caSke design?",
                    FAQAnswer = "Yes, you can choose your own cake design. We work with you to create a cake that fits your vision."
                }
            );


        }
        public DbSet<Backend.Models.FAQ> FAQ { get; set; } = default!;
    }
}