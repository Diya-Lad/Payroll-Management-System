import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  var navItems = [
    "Home",
    "Add Employee",
    "Employee Report",
    "Employee Details",
    "Salary",
    "Salary Report",
    "Logout",
  ];
  var navLink = {
    Home: "home",
    "Add Employee": "addEmployee",
    "Employee Report": "employeeReport",
    "Employee Details": "employeeDetails",
    Salary: "salary",
    "Salary Report": "salaryReport",
    LogOut: "logout",
  };
  var icons = [
    "house",
    "person_add",
    "summarize",
    "info",
    "currency_exchange",
    "price_change",
    "logout",
  ];
  function onClickRedirection(link) {
    if (link == "logout") {
      localStorage.removeItem("___react_session___");
      navigate("/login");
    } else {
      var str = "/" + link;
      navigate(str);
    }
  }
  var index = 0;
  return (
    <>
      {navItems.map((i) => (
        <div
          className="p-3 navItem items"
          onClick={() => onClickRedirection(navLink[i])}
          key={i}
        >
          <li>
            <span className="material-symbols-outlined">{icons[index++]}</span>{" "}
            &nbsp; &nbsp;
            {i}
          </li>
        </div>
      ))}
    </>
  );
}

export default Sidebar;
