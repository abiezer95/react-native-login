import 'react-native';
import React from 'react';
import regex from '../assets/testing_src/Regular_expresions_login';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
// 
import Login from '../components/Login';


//     expect(tree.handledLoginPress(tree, 'user')).toBeDefined()
// })
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
    const login = renderer.create(<Login/>).getInstance();
    expect(login)

    test('Login habdledInput function', () => {
        expect(login.handledInput('user', 'admin')).toBe('admin')
        expect(login.handledInput('password', '12345')).toBe('12345')
    })

    const component = shallow(<Login />);

    it('Input user onchange function', () => {
        component.find('#userName').simulate('change', {nativeEvent: {text: 'admin'}});
        expect(component.find('#userName').prop('value')).toBe('admin');
    })
    
    it('Input password onchange function', () => {
        component.find('#password').simulate('change', {nativeEvent: {text: '12345'}});
        expect(component.find('#password').prop('value')).toBe('12345');
    })

    test('Login submit', () => {
        const tree = renderer.create(<Login/>).getInstance()
        tree.setState({email: 'test@test.com', password: '12345678'})

        tree.handledLoginPress().then(res => expect(res).toBe(true))
    })

    test('Login Button', () => {
        const button = shallow(<Login/>).find('#loginButton');
        expect(button.exists()).toBe(true)
        expect(!!button.simulate('press')).toBe(true)
      }
    )
});
