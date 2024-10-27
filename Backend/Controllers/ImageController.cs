using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Backend.Dtos;
using Microsoft.AspNetCore.Authorization;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly AppDbContext db;

        public ImageController(AppDbContext db)
        {
            this.db = db;
        }

        // api/Item/all
        [HttpGet, Route("all")]
        [AllowAnonymous]

        public ActionResult<List<GetImageResponse>> GetAllItems()
        {
            var item = db.Images.Include(item => item.Category).ToList();
            var response = item.Select(item => new GetImageResponse(item)).ToList();
            return response;
        }

        // api/Item/create
        [HttpPost, Route("create")]
        [Authorize("IsAdmin")]
        public ActionResult<bool> CreateItems(CreateImageRequest request)
        {
            var newIttem = request.ConverToItemModel();
            db.Images.Add(newIttem);
            var numRowsChanged = db.SaveChanges();
            return numRowsChanged == 1;
        }

        [HttpPut, Route("edit/{id}")]
        [Authorize("IsAdmin")]
        public ActionResult<bool> EditItem(int id, [FromBody] UpdateImageRequest request)
        {
            var itemToEdit = db.Images.Find(id);
            if (itemToEdit == null)
            {
                return NotFound(); 
            }

            itemToEdit.Name = request.Name;
            itemToEdit.Description = request.Description;
            itemToEdit.Price = request.Price;

            var numRowsChanged = db.SaveChanges();

            return Ok(numRowsChanged == 1); 
        }


        // api/Item/delete/1
        [HttpDelete, Route("delete/{id}")]
        [Authorize("IsAdmin")]
        public ActionResult<bool> DeleteItems(int id)
        {
            var itemDelete = db.Images.Find(id);
            if (itemDelete == null)
            {
                return false;
            }
            db.Images.Remove(itemDelete);
            var numRowsChanged = db.SaveChanges();
            return numRowsChanged == 1;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest("No file uploaded");


            var frontendUploadsFolder = Path.Combine("C:\\Users\\steph\\OneDrive\\Documents\\A_School\\2024\\IT701 - Project\\MainProject\\ProjectBDNS\\public", "uploads");
            Directory.CreateDirectory(frontendUploadsFolder);

            //save file
            var fileName = Path.GetFileName(file.FileName);
            var filePath = Path.Combine(frontendUploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            var imageUrl = $"/ProjectBDNS/uploads/{file.FileName}";
            return Ok(new { Url = imageUrl });
        }
    }
}
