import * as React from 'react';
import { styles } from '../assets/Main_style';
import { View, Dimensions, Image, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from "react-router-native";

export default class Login extends React.Component {
    render() {
    return (
      <Container>
        <Content style={styles.container}>
          <Image source={require('../assets/wallpaper.jpg')} style={styles.wallpaper} />
         
          <Content style={styles.form}>
            <Form>
              <Item floatingLabel>
                <Label style={{color:'#fff'}}>
                <Icon name='user' size={22} color='#fff'/> Username</Label>
                <Input style={{color:'#fff'}} />
              </Item>
              <Item floatingLabel last> 
                <Label style={{color:'#fff'}}><Icon name='lock' size={22} color='#fff'/> Password</Label>
                <Input style={{color:'#fff'}} secureTextEntry={true}/>
              </Item>

              <View style={{marginTop: 20}}/>
              
              <Button block warning>
                <Text>Entrar</Text>
              </Button>
              
              <View style={{marginTop: 13,height:50, flexDirection:'row'}}>
                <Content>
                  <Link to="/signup"
                        underlayColor="#red">
                    <Text style={{color:'#fff',fontSize: 16}}>Registrarme</Text>
                  </Link>
                </Content>

                <Content>
                  <Text style={{color:'#fff',fontSize: 13}}>¿Olvidaste tu contraseña?</Text>
                </Content>
              </View>
            </Form>
          </Content>

        </Content>
      </Container>
    );
  }
}


