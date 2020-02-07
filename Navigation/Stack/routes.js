import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
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
