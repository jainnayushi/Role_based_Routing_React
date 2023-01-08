import React from "react";
import { USER_TYPE, CURRENT_USER_TYPE } from "../constants";
import Login from "../Comp/Login";

function AdminElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPE.ADMIN) {
    return <div>{children}</div>;
  } else {
    return (
      <div>
        {localStorage.getItem("islogged") ? (
          <div className="denied"> You do not have access to this page</div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default AdminElement;
