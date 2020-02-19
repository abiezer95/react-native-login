import 'react-native';
import React from 'react';
import regex from '../assets/testing_src/Regular_expresions_login';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SignUp from '../components/SignUp'

describe('<SignUp />',()=>{
    const component = shallow(<SignUp />);
    const regedit = renderer.create(<SignUp />); 
    const signup = regedit.getInstance();
    expect(regedit)
    it('validations of the input',()=>{
        
        signup.handledInput('email', 'ememem@gmail.com') 
        signup.handledInput('password', '12345678') 
        signup.handledInput('confirmPassword', '12345678') 
        // console.log(signup.state.email)
        expect(signup.validateInputs()).toBe(true)
        signup.signIn().then(res => {console.log(res)})
        // expect(signup.state.email).toBe(true)
        // expect(signup.state.password).toBe(true)

    })
    // it('singup nodd funciona',()=>{
    //     signup.signIn('password','12345')
    //     expect(regex.password.test(signup.state.password)).toBe(true)
    // })
// 30,32,34,38,40-44,46,72,76 
    test('signup state and habdledInput function test email', () => {
        signup.handledInput('email', 'ememem@gmail.com') //function
        expect(regex.email.test(signup.state.email)).toBe(true); //state 
    });
    
    test('signup state and habdledInput function test email', () => {
        signup.handledInput('password', '12345') //function
        expect(signup.state.password).toBe('12345'); //state 
    });

    it('Input email onchage function', () => {
        component.find('#email').simulate('change', {target: {value: 'test@test.com'}});
        expect(component.find('#email').prop('value')).toBe('test@test.com');
        // expect(signup.state.email).toBe('test@test.com'); //real input
        // expect(regex.email.test(signup.state.email)).toBe(true); //test with regex
    })

    it('Input password onchage function', () => {
        component.find('#password').simulate('change', {target: {value: 'test@test.com'}});
        expect(component.find('#password').prop('value')).toBe('test@test.com'); //real input
    })
    it('On pressed of button', () => {
        component.find('#btn').simulate('press')

    })
    it('conrmation passwords 2 inputs and onchage function', () => {
        component.find('#password').simulate('change', {target: {value: '555###'}});
        component.find('#confirmPassword').simulate('change', {target: {value: '555###'}});
        let p1 = component.find('#password').prop('value');
        let p2 = component.find('#confirmPassword').prop('value');

        expect(p1).toBe(p2); 
    })

    it('Sign In', () => {

    })
});