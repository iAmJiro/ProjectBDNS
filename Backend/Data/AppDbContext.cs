using Microsoft.EntityFrameworkCore;

namespace Backend.Models {
    public class AppDbContext : DbContext {
        public AppDbContext (DbContextOptions<AppDbContext> options) : base (options) { }
        public DbSet<Role> Roles { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>().HasData(
                new Role{
                    RoleId = 1,
                    Name = "admin",
                },
                new Role{
                    RoleId = 2,
                    Name = "user",
                }
            );

            modelBuilder.Entity<User>().HasData(
                new User{
                    RoleId = 1,
                    UserId = 1,
                    Username = "admin",
                    Password = "admin",
                },
                new User{
                    RoleId = 2,
                    UserId = 2,
                    Username = "user",
                    Password = "user",
                }
           );
        }
    }
}