import * as React from 'react';
import { View,Text, StyleSheet, Dimensions, Image } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Login from './components/Login';
import SignUp from './components/SignUp';

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
          <Route exact path="/" render={() => (
            <Login />
          )}/>
          <Route exact path="/signup" render={() => (
              <SignUp />
          )}/>
      </NativeRouter>
      )
  }
}