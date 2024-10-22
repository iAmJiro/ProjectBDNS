using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class Frontendstep : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 1,
                column: "ImageUrls",
                value: "[\"../steph/cake1/one.jpg\",\"../steph/cake1/two.jpg\",\"../steph/cake1/three.jpg\"]");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 2,
                column: "ImageUrls",
                value: "[\"../steph/cake2/one.jpg\",\"../steph/cake2/two.jpg\"]");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 3,
                column: "ImageUrls",
                value: "[\"../steph/cupcake2/one.jpg\",\"../steph/cupcake2/two.jpg\"]");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 4,
                column: "ImageUrls",
                value: "[\"../steph/cupcake1/one.jpg\",\"../steph/cupcake1/two.jpg\",\"../steph/cupcake1/three.jpg\"]");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 1,
                column: "ImageUrls",
                value: "[\"/frontend/steph/cake1/one.jpg\",\"/ProjectBDNS/frontend/steph/cake1/two.jpg\",\"/ProjectBDNS/frontend/steph/cake1/three.jpg\"]");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 2,
                column: "ImageUrls",
                value: "[\"/ProjectBDNS/frontend/steph/cake2/one.jpg\",\"/ProjectBDNS/frontend/steph/cake2/two.jpg\"]");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 3,
                column: "ImageUrls",
                value: "[\"/ProjectBDNS/frontend/steph/cupcake2/one.jpg\",\"/ProjectBDNS/frontend/steph/cupcake2/two.jpg\"]");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 4,
                column: "ImageUrls",
                value: "[\"/ProjectBDNS/frontend/steph/cupcake1/one.jpg\",\"/ProjectBDNS/frontend/steph/cupcake1/two.jpg\",\"/ProjectBDNS/frontend/steph/cupcake1/three.jpg\"]");
        }
    }
}
