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
        
        public ActionResult <List<GetImageResponse>>  GetAllItems()
        {
            var item = db.Images.Include(item => item.Categories).ToList();
            var response = item.Select(item => new GetImageResponse(item)).ToList();
            return response;
        }

        // api/Item/create
        [HttpPost, Route("create")]
        [Authorize("IsAdmin")]
        public ActionResult <bool> CreateItems(CreateImageRequest request)
        {
            var newIttem = request.ConverToItemModel();
            db.Images.Add(newIttem);
            var numRowsChanged = db.SaveChanges();
            return numRowsChanged == 1;
        }

        // api/Item/delete/1
        [HttpDelete, Route("delete/{id}")]
        [Authorize("IsAdmin")]
        public ActionResult<bool> DeleteItems(int id)
        {
            var itemDelete = db.Images.Find(id);
            if (itemDelete == null){
                return false;
            }
            db.Images.Remove(itemDelete);
            var numRowsChanged = db.SaveChanges();
            return numRowsChanged == 1;
        }
    }
}
