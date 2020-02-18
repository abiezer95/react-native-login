import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
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
  },
  errorMessage: {
    padding: 10,
  },
  errorText: {
    color: 'red'
  }
});