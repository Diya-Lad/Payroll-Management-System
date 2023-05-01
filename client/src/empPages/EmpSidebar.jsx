import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./EmpSidebar.css";

function EmpSidebar() {
  const navigate = useNavigate();

  var navItems = ["Home", "Employee Details", "Salary Details", "Logout"];
  var navLink = {
    Home: "empHome",
    "Employee Details": "empDetails",
    "Salary Details": "salDetails",
    LogOut: "logout",
  };

  var icons = ["house", "summarize", "info", "logout"];

  function onClickRedirection(link) {
    if (link == "logout") {
      localStorage.removeItem("___react_session___");
    }
    var str = "/" + link;
    console.log(str);
    navigate(str);
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
            <span class="material-symbols-outlined">{icons[index++]}</span>{" "}
            &nbsp; &nbsp;
            {i}
          </li>
        </div>
      ))}
    </>
  );
}

export default EmpSidebar;
