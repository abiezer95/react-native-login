import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {Button, Container, Content, Form, Icon, Input, Item} from 'native-base';


export default class Login extends Component {
  render() {
    return (
      <Container style={styles.Body}>
        <Content>
          <Image style={styles.image_style}
                 source={{uri: 'https://www.lupusasturias.org/data/fotos/noticias/g_20_historia_clinica_.png'}}/>
          <Form style={styles.information}>
            <Item>
              <Icon name='people'/>
              <Input style={styles.InputDesingExtra} placeholder="User-Name"/>
            </Item>
            <Item>
              <Icon name="key"/>
              <Input style={styles.InputDesingExtra} placeholder="Password"/>
            </Item>
            <Button light style={styles.adaptationOfButton} onPress={() => {
              alert('Bienvenido/a!')
            }}><Text style={styles.textBtn}>Log in</Text></Button>
          </Form>
          <TouchableOpacity light style={styles.adaptationOfButton} onPress={() => ref.current?.navigate('sign-up')}>
            <Text style={styles.textBtn}>Register</Text>
          </TouchableOpacity>
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
    flex: 1,
    height: wp('40%'),
    justifyContent: 'center',
    marginTop: 15,
    width: wp('40%'),
    marginHorizontal: wp('30%'),
  },
  information: {
    flex: 1,
    backgroundColor: '#FCFCF8',
    margin: '5%',
    width: wp('90%'),
    alignContent: 'center',
    borderRadius: 10,
    justifyContent: 'space-between',
    paddingHorizontal: '2%',
    paddingVertical: '10%'
  },
  InputDesingExtra: {
    borderColor: 'transparent',
    borderWidth: 1,
    padding: 5,
    width: '100%'
  },
  paddingAdditional: {
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
    // fontFamily: 'Cochin',

  },


});
module.export = Login