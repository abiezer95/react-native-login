// import * as React from 'react';
// import { styles } from '../assets/Main_style';
// import { View, Dimensions, Image, Text } from 'react-native';
// import { Container, Header, Content, Form, Item, Input, Label, Button, DatePicker } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Link } from "react-router-native";

// var d = new Date();
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import {Button, Container, Form, Icon, Input, Item} from 'native-base';

export default class Index extends React.Component {
  render() {
    return (
      <Container style={styles.Body}>
        <Form style={styles.information}>
          <Item>
            <Icon name='people'/>
            <Input style={styles.InputDesingExtra} placeholder="Name"/>
          </Item>
          <Item>
            <Icon name='people'/>
            <Input style={styles.InputDesingExtra} placeholder="User-name"/>
          </Item>
          <Item>
            <Icon name='people'/>
            <Input style={styles.InputDesingExtra} placeholder="Fecha">
              {/* <DatePicker placeHolderText="Select date"/> */}
            </Input>
          </Item>
          <Item>
            <Icon name="key"/>
            <Input style={styles.InputDesingExtra} placeholder="Password"/>
          </Item>
          <Item>
            <Icon name="key"/>
            <Input style={styles.InputDesingExtra} placeholder=""/>
          </Item>

          <Button light style={styles.adaptationOfButton} onPress={() => {
            alert('Bienvenido/a !')
          }}><Text style={styles.textBtn}>Register</Text></Button>

        </Form>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  Body: {
    backgroundColor: '#DCB2A9',
    width: wp('100%')
  },
  image_style: {
    marginLeft: '23%',
    marginTop: 15,
    height: 200,
    width: "60%",
    flex: 1,
    borderRadius: 500
  },
  PaddingExtra: {
    paddingLeft: 10
  },
  information: {
    flex: 1,
    backgroundColor: '#FCFCF8',
    marginTop: '5%',
    margin: '5%',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    padding: '2%',
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
module.export = Index;