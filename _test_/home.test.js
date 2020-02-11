import 'react-native';
import React, {Component} from 'react';
// import Home from '../App';
import regex from '../assets/testing_src/Regular_expresions_login';
import renderer from 'react-test-renderer';
import Login from '../components/Login';
import App from '../App'
import SignUp from '../components/SignUp'
// import { Component } from 'react';


it('Login habdledInput', () => {
    const tree = renderer.create(<Login/>).getInstance()
    expect(tree.handledInput({text: 'DATAS'})).toBe('DATAS')
    expect(tree.handledInput('data')).toBe(undefined)
    // expect(tree.inputChange('data')).toBe(undefined)
})

jest.useFakeTimers();

// class homeTest extends Component {
//     constructor(){
//         super();
//         this.state = {
//             userName : "",
//             Email : "",
//             password : ""
//         }
//     }
//     render() {
//         return (
//             regex.username.test('Login test user-name',()=>{
//                 // <condition> ? <true> : <false>
//                 // (regex.username === false) ? console.log('esta mal'): console.log('esta bien');
//                 expect(regex.username.test('hola como')).toBe(true);
//             })
//         )
//     }
// }

// export default homeTest;

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

test('<Login />',()=>{
    const login = renderer.create(<Login/>);
    
    expect(login)
});

test('<SignUp />',()=>{
    const sign = renderer.create(<SignUp />)

    expect(sign)
    
});
test('<App />',()=>{
    const app = renderer.create(<App />);

    expect(app)
});