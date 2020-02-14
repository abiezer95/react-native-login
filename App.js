import React, {useRef} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from "expo";
import StackNavigator from './Navigation/Stack';
import {NavigationContainer} from "@react-navigation/native";


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }


  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({loading: false});
  }

  render() {
    const {loading} = this.state;
    return (
      loading ? <AppLoading/>
        :
        <NavigationContainer>
          <StackNavigator/>
        </NavigationContainer>
    )
  }
}