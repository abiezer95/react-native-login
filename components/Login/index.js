import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button, Container, Content, Form, Icon, Input, Item} from 'native-base';
import {firebaseApp} from "../../utils";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      'user': '',
      'password': '',
    }
  }

  handledInput = (name, value) => {
    this.setState({[name]: value});

    return this.state[name]
  };

  handledLoginPress = async () => {
    const {email, password} = this.state;

    return await firebaseApp.auth().signInWithEmailAndPassword(email, password).then(res => {alert('Success');return res
    })
    .catch(err => {alert(`Error trying login: ${err.message}`);return err
    });
  };

  render() {
    return (
      <Container style={styles.Body}>
        <Content>
          <Image style={styles.image_style}
                 source={{uri: 'https://www.lupusasturias.org/data/fotos/noticias/g_20_historia_clinica_.png'}}/>
          <Form style={styles.information}>
            <Item>
              <Icon name='people'/>
              <Input testId='username' style={styles.InputDesingExtra} name="user" placeholder="E-mail"
                     onChange={(event) => this.handledInput('email', event.nativeEvent.text)} value={this.state.email}
                     id="userName"/>
            </Item>
            <Item>
              <Icon name="key"/>
              <Input secureTextEntry={true} style={styles.InputDesingExtra} name="password" placeholder="Password"
                     onChange={(event) => {
                       this.handledInput('password', event.nativeEvent.text)
                     }} value={this.state.password} id="password"/>
            </Item>
            <Button id={'loginButton'} light style={styles.adaptationOfButton} onPress={() => this.handledLoginPress()}><Text
              style={styles.textBtn}>Log in</Text></Button>
          </Form>
          <Content>
            <TouchableOpacity onPress={() => {
              console.log(this.props.navigation.navigate('Register'))
            }}>
              <Text style={{marginBottom: 50, textAlign: 'center', fontSize: 16}}>You don't have an
                account?</Text></TouchableOpacity>
          </Content>
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
    marginLeft: '6%',
    marginTop: 15,
    height: 200,
    width: "95%",
    flex: 1,
    borderRadius: 500
  },
  information: {
    flex: 1,
    backgroundColor: '#FCFCF8',
    marginTop: '5%',
    margin: '5%',
    width: '90%',
    height: 400,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    padding: '2%',
    paddingTop: 100,
    paddingBottom: '1%',
  },
  InputDesingExtra: {
    borderColor: 'transparent',
    borderWidth: 1,
    padding: 5,
    width: '100%'
  },
  paddingAdictional: {
    paddingTop: 30
  },
  adaptationOfButton: {
    width: '90%',
    justifyContent: 'center',
    margin: 20,

  },
  textBtn: {
    color: '#000',
    padding: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
module.export = Login;