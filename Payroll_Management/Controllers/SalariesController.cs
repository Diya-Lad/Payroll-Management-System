﻿using System;
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
    public class SalariesController : ControllerBase
    {
        private readonly PayrollContext _context;

        public SalariesController(PayrollContext context)
        {
            _context = context;
        }

        // GET: api/Salaries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Salary>>> GetSalarys()
        {
            return await _context.Salarys.ToListAsync();
        }

        // GET: api/Salaries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Salary>> GetSalary(int id)
        {
            var salary = await _context.Salarys.FindAsync(id);

            if (salary == null)
            {
                return NotFound();
            }

            return salary;
        }

        // PUT: api/Salaries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSalary(int id, Salary salary)
        {
            if (id != salary.id)
            {
                return BadRequest();
            }

            _context.Entry(salary).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalaryExists(id))
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

        // POST: api/Salaries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Salary>> PostSalary(Salary salary)
        {
            _context.Salarys.Add(salary);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSalary", new { id = salary.id }, salary);
        }

        // DELETE: api/Salaries/5
        /*[HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSalary(int id)
        {
            var salary = await _context.Salarys.FindAsync(id);
            if (salary == null)
            {
                return NotFound();
            }

            _context.Salarys.Remove(salary);
            await _context.SaveChangesAsync();

            return NoContent();
        } */
        [HttpDelete("{emp_id}")]
        public async Task<IActionResult> DeleteSalaries(int emp_id)
        {
            List<Salary> s = await _context.Salarys.ToListAsync();
            if (s == null)
            {
                return NotFound();
            }
            for(int i=0; i<s.Count; i++)
            {
                var salary = s[i];
                if(salary.emp_id == emp_id)
                {
                    _context.Salarys.Remove(salary);
                    await _context.SaveChangesAsync();
                }
            }
            return NoContent();
        }

        private bool SalaryExists(int id)
        {
            return _context.Salarys.Any(e => e.id == id);
        }
    }
}
