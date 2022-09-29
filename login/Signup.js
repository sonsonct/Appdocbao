import React, { Component , useState} from 'react'
import { Text, View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native'

export default class Signup extends Component {
  
  render() {
    const { navigation } = this.props;
    
    

    
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
          keyboardVerticalOffset={100}
        >
          <View style={{flexDirection: 'row', top: -150, left: -30}}>
          <TouchableOpacity
            onPress={()=>{navigation.goBack()}}
          >
            <Image
              source={require('../img/backicon.png')}
              style={{width: 50, height: 50, marginVertical: 30}}
            />
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize:20, color:'#5FDFFA', marginHorizontal: 10, marginVertical: 38}}>CREATE NEW ACCOUNT</Text>
        </View>
          <View>
            <View style={styles.inputs}
            >
              <Image
                style={styles.imageStyle}
                source={require('../img/usericon.png')}

              />
              <TextInput
                style={styles.inputtext}
                placeholder="Email or User Name"

              />
            </View>
            <View style={styles.inputs}
            >
              <Image
                style={styles.imageStyle}
                source={require('../img/phoneicon.png')}

              />
              <TextInput
                style={styles.inputtext}
                placeholder="Phone number"

              />
            </View>
            <View style={styles.inputs}
            >
              <Image
                style={styles.imageStyle}
                source={require('../img/passwordicon.png')}

              />
              <TextInput
                style={styles.inputtext}
                placeholder="Password"

              />
            </View>
            <View style={styles.inputs}
            >
              <TextInput
                style={styles.inputtext}
                placeholder="Enter the password"
                secureTextEntry={true}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: 250,
              height: 50,
              borderWidth: 1,
              borderColor: '#428FF5',
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 5,
              backgroundColor: '#428FF5'
            }}
            onPress={() => { navigation.navigate('SignIn') }}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
              }}
            >Sign Up</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#428FF5',
    borderWidth: 1.6,
    borderRadius: 25,
    marginVertical: 5,
  },
  inputtext: {
    width: 210,
    height: 50,
    fontWeight: "bold",
    color: '#B9B6BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  imageStyle: {
    marginHorizontal: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
