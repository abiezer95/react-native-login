import React, { Component } from 'react';
import { StyleSheet,Image, Text } from 'react-native';
import { Container,
  Header,Right, Button,Icon,
  Content,Footer,Fab,Item,
  FooterTab,Card ,
  Input,Title, Form, Left} from 'native-base';
import { Link } from 'react-router-native';
import {firebaseApp} from '../utils'


export default class Login extends React.Component {
    constructor(){
      super();
      this.state = {
        'user': '',
        'password': '',
        // isLogined: false
      }
    }
    handledInput = (name, value) => {
      this.setState({
          [name]: value
      })
      return this.state[name]
    }             
    
    handledLoginPress = () => {
      const {email, password} = this.state
      firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    render() {
    return (
      <Container style={styles.Body}>
        
      <Header style={styles.paddingAdictional}>
      <Title >MedTegritas</Title>
      </Header>
        <Content>
          <Image style={styles.image_style} source={{uri:'https://www.lupusasturias.org/data/fotos/noticias/g_20_historia_clinica_.png'}} />
            <Form style={styles.information}>
            <Item>
            <Icon name='people' />
                <Input keyboardType={'email-address'} testId='username' style ={styles.InputDesingExtra} name="user" placeholder="User-Name" 
                onChange={(nativeEvent) => this.handledInput('user', nativeEvent.nativeEvent.text )} value={this.state.user} id="userName"/>
            </Item>
            <Item>
            <Icon name="key"/>
                <Input secureTextEntry={true} style={styles.InputDesingExtra} name="password" placeholder="Password" onChange={(nativeEvent) => {
                  this.handledInput('password', nativeEvent.nativeEvent.text)
                }} value={this.state.password} id="password"/>
            </Item>                  
                <Button light style={styles.adaptationOfButton} onClick={this.handledLoginPress}><Text style={styles.textBtn}>Log in</Text></Button>
            </Form>
            <Content>
              <Link to="/signup">
              <Text style={{marginBottom:50,textAlign: 'center',fontSize:16}}>You don't have an account?</Text></Link>
             </Content>
        </Content>
      <Footer/>
    </Container>
    // Register
    
    
  );
}
}

const styles = StyleSheet.create({
Body:{
  backgroundColor:'#DCB2A9'
},
image_style:{
  marginLeft:'6%',
  marginTop:15,
  height: 200,
  width: "95%",
  flex: 1,
  borderRadius:500
},
information: {
  flex: 1,
  backgroundColor: '#FCFCF8',
  marginTop:'5%',
  margin:'5%',
  width:'90%',
  height:400,
  alignItems: 'center',
  borderRadius:10,
  justifyContent: 'center',
  padding:'2%',
  paddingTop:100,
  paddingBottom:'1%',
},
InputDesingExtra:{
  borderColor: 'transparent',
  borderWidth: 1 ,padding:5,width:'100%'
},
paddingAdictional:{
  paddingTop:30
},
adaptationOfButton:{
  width:'90%',
  justifyContent:'center',
  margin:20,
  
},
 textBtn:{
  color:'#000',
  padding:1,
  // marginBottom:50,
  fontWeight:'bold',
  textAlign: 'center',
  // fontFamily: 'Cochin',
  
},


});
module.export = Login