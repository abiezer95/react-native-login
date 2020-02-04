import * as React from 'react';
import { styles } from '../assets/Main_style';
import { View, Dimensions, Image, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, DatePicker } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from "react-router-native";

var d = new Date();

export default class SignUp extends React.Component {
    render() {
    return (
      <Container>
        <Content style={styles.container}>
          <Image source={require('../assets/wallpaper.jpg')} style={styles.wallpaper} />
   
          <Content style={styles.form}>
            <Form>
              <Item floatingLabel >
                <Label style={{color:'#fff'}}>
                <Icon name='inbox' size={18} color='#fff'/> Nombre Completo</Label>
                <Input style={{color:'#fff'}} />
              </Item>

              <Item floatingLabel last>
                <Label style={{color:'#fff'}}>
                <Icon name='user' size={18} color='#fff'/> Usuario</Label>
                <Input style={{color:'#fff'}} />
              </Item>

              <Item floatingLabel last> 
                <Label style={{color:'#fff'}}><Icon name='lock' size={18} color='#fff'/> Password</Label>
                <Input style={{color:'#fff'}} />
              </Item>

              <View style={{marginTop: 20}}/>
              
              <Content>
                <DatePicker
                  // defaultDatae={new Date(2018, 4, 4)}
                  // minimumDate={new Date(2018, 1, 1)}
                  // maximumDate={new Date(2018, 12, 31)}
                  locale={"es"}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Select date"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={this.date}
                  disabled={false}
                  />
                  <Text style={{color:'#fff',fontSize: 15}}>
                    Date: {d.getDate()+ '/' + (d.getMonth()+1) + '/' + d.getFullYear()}
                  </Text>
              </Content>

              <View style={{marginTop: 20}}/>
              
              <Button block warning>
                <Text>Entrar</Text>
              </Button>

              <View style={{marginTop: 13}}/>

              <Content>
                <Link to="/"
                      underlayColor="#red">
                  <Text style={{color:'#fff',fontSize: 13}}>¿Ya tienes una cuenta?</Text>
                </Link>
              </Content>
            </Form>
          </Content>

        </Content>
      </Container>
    );
  }
}


