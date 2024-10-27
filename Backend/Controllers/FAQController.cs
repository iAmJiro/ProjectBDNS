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
using Newtonsoft.Json;

namespace Backend.Controllers
{
    using Microsoft.AspNetCore.Authorization;

    [Route("api/[controller]")]
    [ApiController]
    public class FAQController : ControllerBase
    {
        private readonly AppDbContext _context;

        public FAQController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/FAQ
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<FAQ>>> GetFAQ()
        {
            return await _context.FAQs.ToListAsync();
        }

        // POST: api/FAQ
        [HttpPost]
        [Authorize("IsAdmin")] // Only allow admin users to add FAQs
        public async Task<ActionResult<FAQ>> PostFAQ(FAQ faq)
        {
            _context.FAQs.Add(faq);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetFAQ), new { id = faq.FAQId }, faq);
        }

        [HttpPut, Route("edit/{id}")]
        [Authorize("IsAdmin")] 
        public ActionResult<bool> EditFAQ(int id, [FromBody] UpdateFAQRequest request)
        {
            var faqToEdit = _context.FAQs.Find(id);

            if (faqToEdit == null)
            {
                return NotFound();
            }

            faqToEdit.FAQQuestion = request.FAQQuestion;
            faqToEdit.FAQAnswer = request.FAQAnswer;

            var numRowsChanged = _context.SaveChanges();

            return Ok(numRowsChanged == 1);
        }

        // DELETE: api/FAQ/{id}
        [HttpDelete("{id}")]
        [Authorize("IsAdmin")] // Only allow admin users to delete FAQs
        public async Task<IActionResult> DeleteFAQ(int id)
        {
            var faq = await _context.FAQs.FindAsync(id);
            if (faq == null)
            {
                return NotFound();
            }

            _context.FAQs.Remove(faq);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FAQExists(int id)
        {
            return _context.FAQs.Any(e => e.FAQId == id);
        }
    }

}
