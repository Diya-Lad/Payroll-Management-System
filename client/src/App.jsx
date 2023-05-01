import Title from "./Title/Title";
import Home from "./Home/Home";
import Sidebar from "./Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add_Employee from "./pages/Add_Employee";
import Employee_Report from "./pages/Employee_Report";
import Salary_Report from "./pages/Salary_Report";
import Employee_Details from "./pages/Employee_Details";
import Edit_Emp_Details from "./pages/Edit_Emp_Details";
import Salaries from "./pages/Salaries";
import Login from "./pages/Login";
import EmpHome from "./empPages/EmpHome";
import EmpDetails from "./empPages/EmpDetails";
import EmpSalaryDetails from "./empPages/EmpSalaryDetails";

function App() {
  return (
    <>
      <Title />
      {/* <Nav /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/undefined" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/addEmployee" element={<Add_Employee />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/employeeReport" element={<Employee_Report />} />
          <Route path="/salaryReport" element={<Salary_Report />} />
          <Route path="/employeeDetails" element={<Employee_Details />} />
          <Route path="/editRecord" element={<Edit_Emp_Details />} />
          <Route path="/salary" element={<Salaries />} />
          <Route path="/empHome" element={<EmpHome />} />
          <Route path="/empDetails" element={<EmpDetails />} />
          <Route path="/salDetails" element={<EmpSalaryDetails />} />
          <Route path="/empDetails" element={<EmpDetails />} />
          <Route path="/empSalReport" element={<EmpSalaryDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
