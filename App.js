import React, {useRef} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from "expo";
import StackNavigator from './Navigation/Stack';
import {NavigationContainer} from "@react-navigation/native";


export default function App()  {
  const ref = useRef(null);

  Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    }).then(res => res);
    return (
        <NavigationContainer ref={ref}>
          <StackNavigator/>
        </NavigationContainer>
    )
}