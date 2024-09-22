using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class FAQTest : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "FAQ",
                columns: new[] { "FAQId", "FAQAnswer", "FAQQuestion" },
                values: new object[] { 5, "Yes, you can choose your own cake design. We work with you to create a cake that fits your vision.", "Can I choose my own cake design?" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "FAQ",
                keyColumn: "FAQId",
                keyValue: 5);
        }
    }
}
