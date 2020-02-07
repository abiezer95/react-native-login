import React from 'react';
import 'react-native';
import Login from '../index';
import renderer from 'react-test-renderer';
// import @react-native-community/async-storage;

test('renders correctly', () => {
  const tree = renderer.create(<Login/>).toJSON();
  expect(tree).toMatchSnapshot();
  });
  
 