using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Payroll_Management.models;

namespace Payroll_Management.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncrementsController : ControllerBase
    {
        private readonly PayrollContext _context;

        public IncrementsController(PayrollContext context)
        {
            _context = context;
        }

        // GET: api/Increments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Increment>>> GetIncrements()
        {
            return await _context.Increments.ToListAsync();
        }

        // GET: api/Increments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Increment>> GetIncrement(int id)
        {
            var increment = await _context.Increments.FindAsync(id);

            if (increment == null)
            {
                return NotFound();
            }

            return increment;
        }

        // PUT: api/Increments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIncrement(int id, Increment increment)
        {
            if (id != increment.Id)
            {
                return BadRequest();
            }

            _context.Entry(increment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IncrementExists(id))
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

        // POST: api/Increments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Increment>> PostIncrement(Increment increment)
        {
            _context.Increments.Add(increment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIncrement", new { id = increment.Id }, increment);
        }

        // DELETE: api/Increments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIncrement(int id)
        {
            var increment = await _context.Increments.FindAsync(id);
            if (increment == null)
            {
                return NotFound();
            }

            _context.Increments.Remove(increment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool IncrementExists(int id)
        {
            return _context.Increments.Any(e => e.Id == id);
        }
    }
}
