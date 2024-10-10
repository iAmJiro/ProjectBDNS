using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class FixForProducts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "FAQ",
                keyColumn: "FAQId",
                keyValue: 5,
                column: "FAQQuestion",
                value: "Can I choose my own caSke design?");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "FAQ",
                keyColumn: "FAQId",
                keyValue: 5,
                column: "FAQQuestion",
                value: "Can I choose my own cake design?");
        }
    }
}
