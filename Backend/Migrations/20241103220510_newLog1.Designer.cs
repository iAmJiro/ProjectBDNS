﻿// <auto-generated />
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Backend.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20241103220510_newLog1")]
    partial class newLog1
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Backend.Models.Category", b =>
                {
                    b.Property<int>("CategoryId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CategoryId"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CategoryId");

                    b.ToTable("Categories");

                    b.HasData(
                        new
                        {
                            CategoryId = 1,
                            Name = "Cake"
                        },
                        new
                        {
                            CategoryId = 2,
                            Name = "Cupcake"
                        });
                });

            modelBuilder.Entity("Backend.Models.FAQ", b =>
                {
                    b.Property<int>("FAQId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("FAQId"));

                    b.Property<string>("FAQAnswer")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FAQQuestion")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("FAQId");

                    b.ToTable("FAQ");

                    b.HasData(
                        new
                        {
                            FAQId = 1,
                            FAQAnswer = "Currently, we offer pick-up only for all orders, Our cakes can be picked up from our Wairarapa location.",
                            FAQQuestion = "Do you deliver cakes?"
                        },
                        new
                        {
                            FAQId = 2,
                            FAQAnswer = "Yes, you can customize the flavour of your cake. However, we only offer flavours that are availabe on our menu.",
                            FAQQuestion = "Can i customize the flavour of my cake?"
                        },
                        new
                        {
                            FAQId = 3,
                            FAQAnswer = "It usually takes 2-3 weeks to complete a custom cake order. We recommend playing your order well in advance to ensure availability.",
                            FAQQuestion = "How long does it take to complete an order?"
                        },
                        new
                        {
                            FAQId = 4,
                            FAQAnswer = "Yes, you can choose your own cake design. We work with you to create a cake that fits your vision.",
                            FAQQuestion = "Can I choose my own cake design?"
                        },
                        new
                        {
                            FAQId = 5,
                            FAQAnswer = "Yes, you can choose your own cake design. We work with you to create a cake that fits your vision.",
                            FAQQuestion = "Can I choose my own caSke design?"
                        });
                });

            modelBuilder.Entity("Backend.Models.Image", b =>
                {
                    b.Property<int>("ImageId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ImageId"));

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImageUrls")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("ImageId");

                    b.HasIndex("CategoryId");

                    b.ToTable("Images");

                    b.HasData(
                        new
                        {
                            ImageId = 1,
                            CategoryId = 1,
                            Description = "White chocolate and raspberry cake with milk chocolate ganache filling, finished in vanilla buttercream. Gold cherries and 21 written on it. ",
                            ImageUrls = "[\"../steph/cake1/one.jpg\",\"../steph/cake1/two.jpg\",\"../steph/cake1/three.jpg\"]",
                            Name = "Pink Cake",
                            Price = 120.00m
                        },
                        new
                        {
                            ImageId = 2,
                            CategoryId = 1,
                            Description = "Moreish vanilla cake with salted caramel filling and salted caramel buttercream - what a classic combination. ",
                            ImageUrls = "[\"../steph/cake2/one.jpg\",\"../steph/cake2/two.jpg\"]",
                            Name = "Wood Cake",
                            Price = 150.00m
                        },
                        new
                        {
                            ImageId = 3,
                            CategoryId = 2,
                            Description = "Raspberry white chocolate is fast becoming one of my most requested cake flavours! Pair it with a vanilla buttercream and you’re on your way",
                            ImageUrls = "[\"../steph/cupcake2/one.jpg\",\"../steph/cupcake2/two.jpg\"]",
                            Name = "12pk Cupcake",
                            Price = 85.00m
                        },
                        new
                        {
                            ImageId = 4,
                            CategoryId = 2,
                            Description = "You’re welcome to mix and match cupcake flavours Bento box consists of mini cake, 4 cupcakes and 2 sugar cookies",
                            ImageUrls = "[\"../steph/cupcake1/one.jpg\",\"../steph/cupcake1/two.jpg\",\"../steph/cupcake1/three.jpg\"]",
                            Name = "Bento Box Cupcake",
                            Price = 65.00m
                        });
                });

            modelBuilder.Entity("Backend.Models.Role", b =>
                {
                    b.Property<int>("RoleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("RoleId"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("RoleId");

                    b.ToTable("Roles");

                    b.HasData(
                        new
                        {
                            RoleId = 1,
                            Name = "admin"
                        },
                        new
                        {
                            RoleId = 2,
                            Name = "user"
                        });
                });

            modelBuilder.Entity("Backend.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"));

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId");

                    b.HasIndex("RoleId");

                    b.HasIndex("Username")
                        .IsUnique();

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            Password = "CaKesareYum!!231w0s",
                            RoleId = 1,
                            Username = "emmaleerainbird"
                        },
                        new
                        {
                            UserId = 2,
                            Password = "user",
                            RoleId = 2,
                            Username = "user"
                        });
                });

            modelBuilder.Entity("Backend.Models.Image", b =>
                {
                    b.HasOne("Backend.Models.Category", "Category")
                        .WithMany("Images")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");
                });

            modelBuilder.Entity("Backend.Models.User", b =>
                {
                    b.HasOne("Backend.Models.Role", "Roles")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Roles");
                });

            modelBuilder.Entity("Backend.Models.Category", b =>
                {
                    b.Navigation("Images");
                });

            modelBuilder.Entity("Backend.Models.Role", b =>
                {
                    b.Navigation("Users");
                });
#pragma warning restore 612, 618
        }
    }
}