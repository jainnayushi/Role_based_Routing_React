import { Link } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Comp/AppRoutes";
import Login from "./Comp/Login";
import { CURRENT_USER_TYPE, USER_TYPE } from "./constants";

function App() {
  return (
    <div className="App">
      {/* <h1>Hi{localStorage.getItem("isLogged")}</h1> */}
      {localStorage.getItem("isLogged") == undefined ? (
        <Login />
      ) : (
        <div
          className="nav"
          style={{
            display: "flex",
            gap: "12px",
            padding: "8px",
            backgroundColor: "black",
            color: "white",
            borderBottom: "2px solid yellow",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        >
          <span className="s">{CURRENT_USER_TYPE}</span>

          <Link to={"/home"} className="link">
            Home
          </Link>
          {CURRENT_USER_TYPE === USER_TYPE.ADMIN ||
          CURRENT_USER_TYPE === USER_TYPE.NORMAL_USER ? (
            <>
              <Link to={"/user"} className="link">
                User
              </Link>
              <Link to={"/profile"} className="link">
                Profile
              </Link>
            </>
          ) : null}

          {CURRENT_USER_TYPE === USER_TYPE.ADMIN ? (
            <>
              <Link to={"/admin"} className="link">
                Admin
              </Link>
            </>
          ) : null}
        </div>
      )}
      <AppRoutes />
    </div>
  );
}

export default App;
