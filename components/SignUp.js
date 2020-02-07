import React, { Component } from 'react';
import { StyleSheet,Image, Text } from 'react-native';
import { Container,
  Header, Button,
  Content,Footer,Fab,Item,
  FooterTab,Card ,Icon,
  Input,Title, Form, Left,DatePicker} from 'native-base';
import { Link } from 'react-router-native';

export default class SignUp extends React.Component {
    render() {
    return (
      <Container style={styles.Body}>
        <Content>
        <Header>
          <Left style ={styles.PaddingExtra}  >
          <Button transparent >
         <Link to="/"><Icon name='arrow-back' /></Link>
          </Button></Left>
          </Header>
          <Image style={styles.image_style} source={{uri:'https://i.ya-webdesign.com/images/clipboard-to-png-7.png'}} />
          

       <Form style={styles.information}>
             <Item>
              <Icon name='person' />
                  <Input style ={styles.InputDesingExtra} placeholder="Name"/>
              </Item>
              <Item>
              <Icon name='people' />
                  <Input style ={styles.InputDesingExtra} placeholder="User-name"/>
              </Item>
              {/* <Item>
              <Icon name='people' />
                  <Input style ={styles.InputDesingExtra} placeholder="Fecha">
                    <DatePicker placeHolderText="Select date"/>
                  </Input>
              </Item> */}
              <Item>
              <Icon name='mail' />
                  <Input style ={styles.InputDesingExtra} placeholder="Email"/>
              </Item> 
              <Item>
              <Icon name="key"/>
                  <Input style ={styles.InputDesingExtra} placeholder="Password"/>
              {/* </Item>    
               <Item>
              <Icon name="key"/> */}
                  <Input style ={styles.InputDesingExtra} placeholder="Confirm Password"/>
              </Item>
                            
              
                    <Button light style={styles.adaptationOfButton} ><Text style={styles.textBtn}>Register</Text></Button>
              
             </Form>
             </Content>
             <Footer/>


      </Container>
    );
  }
}



const styles = StyleSheet.create({
  Body:{
    backgroundColor:'#DCB2A9'
  },
  image_style:{
    marginLeft:'23%',
    marginTop:15,
    height: 200,
    width: "55%",
    flex: 1,
    borderRadius:500
  },
  PaddingExtra:{
    paddingLeft: 10
  },
  information: {
    flex: 1,
    backgroundColor: '#FCFCF8',
    marginTop:'5%',
    margin:'2%',
    width:'96%',
    height:500,
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
    width:'80%',
    justifyContent:'center',
    margin:20,
    
  },
   textBtn:{
    color:'#000',
    padding:1,
    fontWeight:'bold',
    textAlign: 'center',
    // fontFamily: 'Cochin',
    
  },
  
  
});
