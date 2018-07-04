import React,{ Component } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, Image, TouchableOpacity } from 'react-native';

export default class LoginForm extends Component {
  render() {
      return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="username or email"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            />
            <TextInput
              placeholder="password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="go"
              secureTextEntry
              style={styles.input}
              ref={(input) => this.passwordInput = input}
              />

              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
        </View>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    padding:20
  },
  input:{
    height:40,
    backgroundColor:'rgba(255,255,255,0.8)',
    marginBottom:20,
    color:'black',
    paddingHorizontal:10
  },
  buttonContainer:{
    backgroundColor:'#298Bb9',
    paddingVertical:15
  },
  buttonText:{
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight:'700'
  }
});
