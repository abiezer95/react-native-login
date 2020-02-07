import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import React from "react";

function setSafeArea(Component) {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}
      >
        <Component/>
      </SafeAreaView>
    </SafeAreaProvider>)
}

const Routes = [
  {
    name: 'Login',
    path: 'login',
    icon: 'home',
    component: () => setSafeArea(Login)
  },
  {
    name: 'Register',
    path: 'SignUp',
    icon: 'home',
    component: () => setSafeArea(SignUp)
  }
];

export default Routes
