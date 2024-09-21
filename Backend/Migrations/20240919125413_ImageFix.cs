using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class ImageFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 1,
                column: "ImageUrls",
                value: "[\"/ProjectBDNS/steph/cake1/one.jpg\",\"/ProjectBDNS/steph/cake1/two.jpg\",\"/ProjectBDNS/steph/cake1/three.jpg\"]");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 2,
                column: "ImageUrls",
                value: "[\"/ProjectBDNS/steph/cake2/one.jpg\",\"/ProjectBDNS/steph/cake2/two.jpg\"]");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 3,
                columns: new[] { "Description", "ImageUrls", "Name", "Price" },
                values: new object[] { "Raspberry white chocolate is fast becoming one of my most requested cake flavours! Pair it with a vanilla buttercream and you’re on your way", "[\"/ProjectBDNS/steph/cupcake2/one.jpg\",\"/ProjectBDNS/steph/cupcake2/two.jpg\"]", "12pk Cupcake", 85.00m });

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 4,
                columns: new[] { "Description", "ImageUrls", "Name", "Price" },
                values: new object[] { "You’re welcome to mix and match cupcake flavours Bento box consists of mini cake, 4 cupcakes and 2 sugar cookies", "[\"/ProjectBDNS/steph/cupcake1/one.jpg\",\"/ProjectBDNS/steph/cupcake1/two.jpg\",\"/ProjectBDNS/steph/cupcake1/three.jpg\"]", "Bento Box Cupcake", 65.00m });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 1,
                column: "ImageUrls",
                value: "[\"/steph/cake1/one.jpg\",\"/steph/cake1/two.jpg\",\"/steph/cake1/three.jpg\"]");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 2,
                column: "ImageUrls",
                value: "[\"/steph/cake2/one.jpg\",\"/steph/cake2/two.jpg\"]");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 3,
                columns: new[] { "Description", "ImageUrls", "Name", "Price" },
                values: new object[] { "You’re welcome to mix and match cupcake flavours Bento box consists of mini cake, 4 cupcakes and 2 sugar cookies", "[\"/steph/cupcake1/one.jpg\",\"/steph/cupcake1/two.jpg\",\"/steph/cupcake1/three.jpg\"]", "Bento Box Cupcake", 65.00m });

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 4,
                columns: new[] { "Description", "ImageUrls", "Name", "Price" },
                values: new object[] { "Raspberry white chocolate is fast becoming one of my most requested cake flavours! Pair it with a vanilla buttercream and you’re on your way", "[\"/steph/cupcake2/one.jpg\",\"/steph/cupcake2/two.jpg\"]", "12pk Cupcake", 85.00m });
        }
    }
}
