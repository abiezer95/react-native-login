import React from 'react';
import {Image, Text} from 'react-native';
import {Button, Container, Content, Form, Icon, Input, Item, View} from 'native-base';
import {styles} from "./styles";
import {firebaseApp as firebase} from '../../utils'
import regex from '../../assets/testing_src/Regular_expresions_login'

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      user: '',
      email: '',
      password: '',
      confirmPassword: '',
      messageError: ''
    }
  }

  handledInput = (name, value) => {
    this.setState({
      [name]: value
    });

    return this.state[name];
  }
  /* istanbul ignore next */
  validateInputs() {
    const {email, password, confirmPassword} = this.state;

    return regex.email.test(email) && password === confirmPassword && password.length >= 8
  }

  async signIn() {
    const {email, password} = this.state;

    if (this.validateInputs()) {
      return firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
        this.setState({messageError: null});
        return res
      }).catch(({message}) => this.setState({messageError: message}))
    }
    this.setState({messageError: "Invalid email or password doesn't match"})
  }

  render() {
    const {messageError} = this.state;
    return (
      <Container style={styles.Body}>
        <Content>
          <Image style={styles.image_style} source={{uri: 'https://i.ya-webdesign.com/images/clipboard-to-png-7.png'}}/>

          <Form style={styles.information}>
            <Item>
              <Icon name='mail'/>
              <Input style={styles.InputDesingExtra} placeholder="Email" id="email"
                     onChange={(env) => this.handledInput('email', env.target.value)} value={this.state.email} name='email'/>
            </Item>
            <Item>
              <Icon name="key"/>
              <Input secureTextEntry={true} style={styles.InputDesingExtra} placeholder="Password" id="password"
                     onChange={(env) => this.handledInput('password', env.target.value)} value={this.state.password}
                     name='password'/>
            </Item>
            <Item>
              <Icon name="key"/>
              <Input secureTextEntry={true} style={styles.InputDesingExtra} placeholder="Confirm Password" id="confirmPassword"
                     onChange={(env) => this.handledInput('confirmPassword', env.target.value)} value={this.state.confirmPassword}/>
            </Item>

            {!!messageError ? <View style={styles.errorMessage}><Text style={styles.errorText}>{messageError}</Text></View> : null}
            <Button light style={styles.adaptationOfButton} onPress={() => this.signIn()}><Text style={styles.textBtn}>Register</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

