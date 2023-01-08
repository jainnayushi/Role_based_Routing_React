import React from "react";
import { USER_TYPE, CURRENT_USER_TYPE } from "../constants";
import Login from "../Comp/Login";
import { Navigate } from "react-router-dom/dist";

function UserElement({ children }) {
  if (
    CURRENT_USER_TYPE === USER_TYPE.ADMIN ||
    CURRENT_USER_TYPE === USER_TYPE.NORMAL_USER
  ) {
    return <>{children}</>;
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

export default UserElement;
