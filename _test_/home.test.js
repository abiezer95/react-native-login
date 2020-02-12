import 'react-native';
import React from 'react';
import regex from '../assets/testing_src/Regular_expresions_login';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
// 
import Login from '../components/Login';
import App from '../App'
import SignUp from '../components/SignUp'

it('Login submit', () => {
    const tree = renderer.create(<Login/>).getInstance()
    expect(tree.handledLoginPress()).toBe(true)
})

jest.useFakeTimers();

test('Login test user-name', () => {
    let HomeData = renderer.create(<Login />).getInstance();
    // expect(HomeData.change(username)).toBe(10);
    // console.log(regex.email.test('abiezer95gmail.com'));
    expect(regex.username.test('holajshrueur')).toBe(true);
});

test('Login test email', () => {
    // expect(HomeData.change(username)).toBe(10);
    // console.log(regex.email.test('abiezer95gmail.com'));
    expect(regex.email.test('ememem@gmail.com')).toBe(true);
});

test('Login test phoneNumber', () => {
    // expect(HomeData.change(username)).toBe(10);
    // console.log(regex.email.test('abiezer95gmail.com'));
    expect(regex.phoneNumber.test('809-999-8587')).toBe(true);
});

describe('<Login />',()=>{
    const login = renderer.create(<Login/>);
    expect(login)

    test('Login habdledInput function', () => {
        expect(login.getInstance().handledInput('user', 'admin')).toBe('admin')
        expect(login.getInstance().handledInput('password', '12345')).toBe('12345')
    })

    const component = shallow(<Login />);

    test('Input user onchage function', () => {
        component.find('#userName').simulate('change', {target: {value: 'admin'}});
        expect(component.find('#userName').prop('value').target.value).toBe('admin');
    })
    
    test('Input password onchage function', () => {
        component.find('#password').simulate('change', {target: {value: '12345'}});
        expect(component.find('#password').prop('value').target.value).toBe('12345');
    })
});

test('<SignUp />',()=>{
    const sign = renderer.create(<SignUp />)
    expect(sign)
});

test('<App />',()=>{
    const app = renderer.create(<App />);
    expect(app)
});