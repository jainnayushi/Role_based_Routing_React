import React from "react";
import "../App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../Comp/Home";
import User from "../Comp/User";
import Login from "./Login";
import Admin from "../Comp/Admin";
import Profile from "../Comp/Profile";
import PublicElement from "../Protected/PublicElement";
import UserElement from "../Protected/UserElement";
import AdminElement from "../Protected/AdminElement";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<div></div>}></Route>
        <Route
          path="/home"
          exact
          element={
            <PublicElement>
              <Home />
            </PublicElement>
          }
        ></Route>
        <Route
          path="/user"
          exact
          element={
            <UserElement>
              <User />
            </UserElement>
          }
        ></Route>
        <Route
          path="/profile"
          exact
          element={
            <UserElement>
              <Profile />
            </UserElement>
          }
        ></Route>
        <Route
          path="/admin"
          exact
          element={
            <AdminElement>
              <Admin />
            </AdminElement>
          }
        ></Route>

        <Route path="*" element={<div>Page Not Fount</div>}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
