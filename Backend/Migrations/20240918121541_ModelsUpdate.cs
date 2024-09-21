using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class ModelsUpdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Categories",
                keyColumn: "CategoryId",
                keyValue: 3);

            migrationBuilder.RenameColumn(
                name: "Src",
                table: "Images",
                newName: "ImageUrls");

            migrationBuilder.RenameColumn(
                name: "Alt",
                table: "Images",
                newName: "Description");

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 1,
                columns: new[] { "Description", "ImageUrls", "Name", "Price" },
                values: new object[] { "White chocolate and raspberry cake with milk chocolate ganache filling, finished in vanilla buttercream. Gold cherries and 21 written on it. ", "[\"/steph/cake1/one.jpg\",\"/steph/cake1/two.jpg\",\"/steph/cake1/three.jpg\"]", "Pink Cake", 120.00m });

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 2,
                columns: new[] { "CategoryId", "Description", "ImageUrls", "Name", "Price" },
                values: new object[] { 1, "Moreish vanilla cake with salted caramel filling and salted caramel buttercream - what a classic combination. ", "[\"/steph/cake2/one.jpg\",\"/steph/cake2/two.jpg\"]", "Wood Cake", 150.00m });

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 3,
                columns: new[] { "CategoryId", "Description", "ImageUrls", "Name", "Price" },
                values: new object[] { 2, "You’re welcome to mix and match cupcake flavours Bento box consists of mini cake, 4 cupcakes and 2 sugar cookies", "[\"/steph/cupcake1/one.jpg\",\"/steph/cupcake1/two.jpg\",\"/steph/cupcake1/three.jpg\"]", "Bento Box Cupcake", 65.00m });

            migrationBuilder.InsertData(
                table: "Images",
                columns: new[] { "ImageId", "CategoryId", "Description", "ImageUrls", "Name", "Price" },
                values: new object[] { 4, 2, "Raspberry white chocolate is fast becoming one of my most requested cake flavours! Pair it with a vanilla buttercream and you’re on your way", "[\"/steph/cupcake2/one.jpg\",\"/steph/cupcake2/two.jpg\"]", "12pk Cupcake", 85.00m });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 4);

            migrationBuilder.RenameColumn(
                name: "ImageUrls",
                table: "Images",
                newName: "Src");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Images",
                newName: "Alt");

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "CategoryId", "Name" },
                values: new object[] { 3, "Cookie" });

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 1,
                columns: new[] { "Alt", "Name", "Price", "Src" },
                values: new object[] { "", "", 0m, "" });

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 2,
                columns: new[] { "Alt", "CategoryId", "Name", "Price", "Src" },
                values: new object[] { "", 2, "", 0m, "" });

            migrationBuilder.UpdateData(
                table: "Images",
                keyColumn: "ImageId",
                keyValue: 3,
                columns: new[] { "Alt", "CategoryId", "Name", "Price", "Src" },
                values: new object[] { "", 3, "", 0m, "" });
        }
    }
}
