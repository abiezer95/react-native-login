/* istanbul ignore file */

import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import React from "react";

const Routes = [
  {
    name: 'Login',
    path: 'login',
    icon: 'home',
    component: Login
  },
  {
    name: 'Register',
    path: 'sign-up',
    icon: 'home',
    component: SignUp
  }
];

export default Routes
