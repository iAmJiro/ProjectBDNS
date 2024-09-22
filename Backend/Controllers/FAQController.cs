using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
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

    // PUT: api/FAQ/{id}
    [HttpPut("{id}")]
    [Authorize("IsAdmin")] // Only allow admin users to edit FAQs
    public async Task<IActionResult> PutFAQ(int id, FAQ faq)
    {
        if (id != faq.FAQId)
        {
            return BadRequest();
        }

        _context.Entry(faq).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!FAQExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
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
