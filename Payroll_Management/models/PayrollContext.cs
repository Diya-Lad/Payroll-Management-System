using System.Collections.Generic;
using System.Data;
using Microsoft.EntityFrameworkCore;

namespace Payroll_Management.models
{
    public class PayrollContext : DbContext
    {
        public PayrollContext(DbContextOptions<PayrollContext> options) : base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; } = null!;
        public DbSet<Increment> Increments { get; set; } = null!;
        public DbSet<Roles> Roles { get; set; } = null!;
        public DbSet<Salary> Salarys { get; set; } = null!;

    }
}
