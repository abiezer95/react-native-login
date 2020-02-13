import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {Button, Container, Content, Form, Icon, Input, Item} from 'native-base';

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      'name': '',
      'user': '',
      'email': '',
      'password': '',
      'confirmPassword': ''
    }
  }

  handledInput = (name, value) => {
    this.setState({
      [name]: value
    });

    return this.state[name];
  }

  render() {
    return (
      <Container style={styles.Body}>
        <Content>
          <Image style={styles.image_style} source={{uri: 'https://i.ya-webdesign.com/images/clipboard-to-png-7.png'}}/>

          <Form style={styles.information}>
            <Item>
              <Icon name='mail'/>
              <Input style={styles.InputDesingExtra} placeholder="Email" id="email"
                     onChange={(env) => this.handledInput('email', env)} value={this.state.email} name='email'/>
            </Item>
            <Item>
              <Icon name="key"/>
              <Input style={styles.InputDesingExtra} placeholder="Password" id="password"
                     onChange={(env) => this.handledInput('password', env)} value={this.state.password}
                     name='password'/>

              <Input style={styles.InputDesingExtra} placeholder="Confirm Password" id="confirmPassword"
                     onChange={(env) => this.handledInput('confirmPassword', env)} value={this.state.confirmPassword}/>
            </Item>

            <Button light style={styles.adaptationOfButton}><Text style={styles.textBtn}>Register</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  Body: {
    backgroundColor: '#DCB2A9'
  },
  image_style: {
    marginLeft: '23%',
    marginTop: 15,
    height: 200,
    width: "55%",
    flex: 1,
    borderRadius: 500
  },
  PaddingExtra: {
    paddingLeft: 10
  },
  information: {
    flex: 1,
    backgroundColor: '#FCFCF8',
    marginTop: '1%',
    margin: '2%',
    width: '96%',
    // height:500,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    // padding:'2%',
    paddingTop: 70,
    paddingBottom: '1%',
  },
  InputDesingExtra: {
    borderColor: 'transparent',
    borderWidth: 1, padding: 5, width: '100%'
  },
  paddingAdictional: {
    paddingTop: 30
  },
  adaptationOfButton: {
    width: '80%',
    justifyContent: 'center',
    margin: 20,

  },
  textBtn: {
    color: '#000',
    padding: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    // fontFamily: 'Cochin',
  },
});
