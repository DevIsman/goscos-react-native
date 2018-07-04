import React,{ Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';


import LoginForm from './component/LoginForm';

export default class App extends Component {
  render() {
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
           <Text style={styles.title}>New GOSCOS React Native Login</Text>
          </View>

          <View style={styles.formContainer}>
            <LoginForm />
          </View>
        </KeyboardAvoidingView>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#349Bdb',
  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center'
  },
  title:{
    color:'#FFF',
    marginTop:10,
    width:160,
    textAlign:'center',
    opacity:0.8
  },
  logo: {
    width:100,
    height:100
  }

});
