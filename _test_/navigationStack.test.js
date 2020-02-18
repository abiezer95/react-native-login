import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native'
import {shallow} from 'enzyme';
import StackNavigator from "../Navigation/Stack";

describe('Navigation Stack', () => {
  const navigateStack = shallow(
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  ),
    children = renderer.create(<NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>).toJSON().children[0];
  test('Exist', () => expect(navigateStack.exists()).toBe(true));


  test('Render', () => expect(children.children.length).toBe(2))

});
