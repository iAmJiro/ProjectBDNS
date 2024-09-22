using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class FAQSetup : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FAQ",
                columns: table => new
                {
                    FAQId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FAQQuestion = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FAQAnswer = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FAQ", x => x.FAQId);
                });

            migrationBuilder.InsertData(
                table: "FAQ",
                columns: new[] { "FAQId", "FAQAnswer", "FAQQuestion" },
                values: new object[,]
                {
                    { 1, "Currently, we offer pick-up only for all orders, Our cakes can be picked up from our Wairarapa location.", "Do you deliver cakes?" },
                    { 2, "Yes, you can customize the flavour of your cake. However, we only offer flavours that are availabe on our menu.", "Can i customize the flavour of my cake?" },
                    { 3, "It usually takes 2-3 weeks to complete a custom cake order. We recommend playing your order well in advance to ensure availability.", "How long does it take to complete an order?" },
                    { 4, "Yes, you can choose your own cake design. We work with you to create a cake that fits your vision.", "Can I choose my own cake design?" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FAQ");
        }
    }
}
