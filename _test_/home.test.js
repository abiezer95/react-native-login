import 'react-native';
import React from 'react';
import regex from '../assets/testing_src/Regular_expresions_login';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
// 
import Login from '../components/Login';
import App from '../App'
import SignUp from '../components/SignUp'


it('Login-SignUp habdledInput', () => {
    const tree = renderer.create(<Login/>).getInstance()
    const treeS = renderer.create(<SignUp/>).getInstance()
    expect(tree.handledInput({text: 'DATAS'})).toBe(undefined)
    expect(treeS.handledInput({text: 'DATAS'})).toBe(undefined)
   
})

// it('Login ccc', () => {
//     const tree = renderer.create(<Login/>).getInstance()
//     // expect(tree.handledInput({text: 'DATAS'})).toBe('DATAS')
//     expect(tree.handledLoginPress({text: 'DATAS'})).toBeDefined()
//     expect(tree.onAddTodo())
   
it('Login submit', () => {
    const tree = renderer.create(<Login/>).getInstance()
    const treeS = renderer.create(<SignUp/>).getInstance()
    
    expect(tree.handledLoginPress()).toBe(true)
    expect(treeS.handledSignUpPress()).toBe(true)

})

//     expect(tree.handledLoginPress(tree, 'user')).toBeDefined()
// })
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

test('<SignUp />',()=>{
    const sign = renderer.create(<SignUp />)
    expect(sign)
});

test('<App />',()=>{
    const app = renderer.create(<App />);
    expect(app)
});
describe ('<SignUp/>',()=>{
    const signUp = renderer.create(<SignUp/>).getInstance();
    expect(signUp)

    test('Input the data of Sign Up', () => {
        expect(signUp.handledInput('email','riperez@gmail.com')).toBe(undefined)
        expect(signUp.handledInput('password','holamundo')).toBe(undefined)
        expect(signUp.handledInput('confirmPassword','holamundo')).toBe(undefined)
        
    })
    const signuUpData = shallow(<SignUp/>);
    test('Input email onchange function', ()=>{
        signuUpData.find('#email').simulate('change',{
            target:{
                value:'riperez@gmail.com'
            }});
    })
    test('Input password onchange function', ()=>{
        signuUpData.find('#password').simulate('change',{
            target:{
                value:'holamundo'
            }});
    })
    test('Input confirmPassword onchange function',()=>{
        signuUpData.find('#confirmPassword').simulate('change',{
            target:{
                value:'holamundo'
            }});
    })
})
describe('<Login />',()=>{
    const login = renderer.create(<Login/>).getInstance();
    expect(login)

    test('Login habdledInput function', () => {
        expect(login.handledInput('user', 'admin')).toBe('admin')
        expect(login.handledInput('password', '12345')).toBe('12345')
    })

    const component = shallow(<Login />);

    test('Input user onchage function', () => {
        component.find('#userName').simulate('change', {
            target: {
                value: 'admin'
            }});
            //Simular un valor (por eso lo comente)
        // expect(component.find('#userName').prop('value').target.value).toBe('admin');
    })
    
    test('Input password onchage function', () => {
        component.find('#password').simulate('change', {
            target: {
                value: '12345'
            }});
            //Simular un valor (por eso lo comente)
        // expect(component.find('#password').prop('value').target.value).toBe('12345');
    })
});
