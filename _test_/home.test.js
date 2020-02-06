import 'react-native';
import React from 'react';
import Home from '../App';
import regex from '../assets/testing_src/Regular_expresions_login';
import TestRenderer from 'react-test-renderer';

jest.useFakeTimers();

test('Login test email', () => {
    // let HomeData = TestRenderer.create(<Home />).getInstance();
    // expect(HomeData.change(2)).toBe(10);
    // console.log(regex.email.test('abiezer95gmail.com'));
    
    expect(regex.username.test('')).toBe(true);
});
