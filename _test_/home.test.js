import 'react-native';
import React from 'react';
// import Home from '../App';
import regex from '../assets/testing_src/Regular_expresions_login';
import TestRenderer from 'react-test-renderer';
import Login from '../components/Login';

jest.useFakeTimers();

test('Login test user-name', () => {
    let HomeData = TestRenderer.create(<Login />).getInstance();
    // expect(HomeData.change(username)).toBe(10);
    // console.log(regex.email.test('abiezer95gmail.com'));
    expect(regex.username.test('holajshrueur')).toBe(true);
});
test('Login test email', () => {
    
    // expect(HomeData.change(username)).toBe(10);
    // console.log(regex.email.test('abiezer95gmail.com'));
    expect(regex.email.test('ememem@gmail.com')).toBe(true);
});
