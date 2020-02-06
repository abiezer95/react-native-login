
import React, { Component } from 'react';
import { StyleSheet,Image, Text } from 'react-native';
import { Container,
  Header,Right, Button,Icon,
  Content,Footer,Fab,Item,
  FooterTab,Card ,
  Input,Title, Form, Left} from 'native-base';
import { Link } from 'react-router-native';

export default class Login extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        user: '',
        password: '',
        isLogined: false
      }
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
                <Input style ={styles.InputDesingExtra} placeholder="User-Name"/>
            </Item>
            <Item>
            <Icon name="key"/>
                <Input style ={styles.InputDesingExtra} placeholder="Password"/>
            </Item>                  
                <Button light style={styles.adaptationOfButton} onPress={()=>{alert('Bienvenido/a !')}}><Text style={styles.textBtn}>Log in</Text></Button>
            </Form>
            <Content>
              <Link to="/signup">
              <Text style={styles.textBtn}>Ya tienes Cuenta ?</Text>
             </Link>
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
  marginLeft:'23%',
  marginTop:15,
  height: 200,
  width: "60%",
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
  fontWeight:'bold',
  textAlign: 'center',
  // fontFamily: 'Cochin',
  
},


});
module.export = Login