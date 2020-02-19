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
    it('singup nodkk funciona',()=>{
        signup.signIn()
        signup.handledInput('email', 'ememem@gmail.com') 
        signup.handledInput('password', '12345678') 
        signup.handledInput('confirmPassword', '12345678') 
        // console.log(signup.state.email)
        expect(signup.validateInputs()).toBe(true)
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
        expect(component.find('#email').prop('value').target.value).toBe('test@test.com'); //real input
        // expect(regex.email.test(component.find('#email').prop('value').target.value)).toBe(true); //test with regex
    })

    it('Input password onchage function', () => {
        component.find('#password').simulate('change', {target: {value: 'test@test.com'}});
        expect(component.find('#password').prop('value').target.value).toBe('test@test.com'); //real input
    })
    
    it('conrmation passwords 2 inputs and onchage function', () => {
        // component.find('#password').simulate('change', {target: {value: '55587676767'}});
        component.find('#confirmPassword').simulate('change', {target: {value: '55587676767'}});
        
        let p1 = component.find('#password').prop('value').target.value;
        let p2 = component.find('#confirmPassword').prop('value').target.value;

        expect(p1).toBe(p2); 
    })
});