// import { CURRENT_USER_TYPE1 } from "./Comp/Login";
export const USER_TYPE = {
  PUBLIC: "Public User",
  NORMAL_USER: "Normal User",
  ADMIN: "Admin User",
};
// if (CURRENT_USER_TYPE1) {
//   CURRENT_USER_TYPE = CURRENT_USER_TYPE1;
//   console.log("A", CURRENT_USER_TYPE);
// }
export let CURRENT_USER_TYPE = localStorage.getItem("USER");
