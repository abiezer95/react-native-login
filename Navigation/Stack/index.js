import React, {Component} from "react";
import {Text} from 'react-native';
import styles from './styles'
import {createStackNavigator} from "@react-navigation/stack";
import Routes from "./routes";

export default class StackNavigator extends Component {
  render() {
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator>
        {Routes.map((route, index) =>
          <Stack.Screen
            key={index}
            name={route.name}
            component={route.component}
            options={{
              headerTitle: props => <Text style={styles.title}>{route.name}</Text>
            }}
          />
        )}
      </Stack.Navigator>
    )
  }
}
