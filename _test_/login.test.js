import 'react-native';
import React from 'react';
import regex from '../assets/testing_src/Regular_expresions_login';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
// 
import Login from '../components/Login';
import App from '../App'

jest.useFakeTimers();

test('Login test user-name', () => {
    expect(regex.username.test('holajshrueur')).toBe(true);
});

test('Login test email', () => {
    expect(regex.email.test('ememem@gmail.com')).toBe(true);
});

test('Login test phoneNumber', () => {
    expect(regex.phoneNumber.test('809-999-8587')).toBe(true);
});

describe('<Login />',()=>{
    const login = renderer.create(<Login/>);
    expect(login) //render test

    it('Login habdledInput function', () => {
        expect(login.getInstance().handledInput('user', 'admin')).toBe('admin')
        expect(login.getInstance().handledInput('password', '12345')).toBe('12345')
    })

    const component = shallow(<Login />);

    it('Input user onchage function', () => {
        component.find('#userName').simulate('change', {target: {value: 'admin'}});
        expect(component.find('#userName').prop('value').target.value).toBe('admin');
    })
    
    it('Input password onchage function', () => {
        component.find('#password').simulate('change', {target: {value: '12345'}});
        expect(component.find('#password').prop('value').target.value).toBe('12345');
    })

    test('Login submit', () => {
        const tree = renderer.create(<Login/>).getInstance()
        expect(tree.handledLoginPress()).toBe(true)
    })
});

test('<App />',()=>{
    const app = renderer.create(<App />);
    expect(app)
});