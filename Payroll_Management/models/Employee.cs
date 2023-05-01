namespace Payroll_Management.models
{
    public class Employee
    {
        public int id { get; set; }
        public string? emp_name { get; set; }
        public string? emp_mobile_no { get; set; }
        public string? emp_email { get; set; }
        public string? emp_dob { get; set; }
        public string? emp_pass { get; set; }

        public string? designation { get; set; }
        public string? basic_pay { get; set; }
        public string? salary { get; set; }
        public string? bank_account { get; set; }
        public string? joining_date { get; set; }
        public string? address { get; set; }
        public string? pincode { get; set; }
    }
}
