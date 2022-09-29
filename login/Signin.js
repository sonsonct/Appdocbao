import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native'

export default class Signin extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.container}>

                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                    keyboardVerticalOffset={100}
                >
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                    >
                        <Image
                            source={require('../img/backicon.png')}
                            style={{ width: 50, height: 50, left: -150, top: -30}}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#428FF5' }}>SIGN IN</Text>
                    </View>
                    <View style={styles.img}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../img/signin.png')}
                        />
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
                                source={require('../img/passwordicon.png')}

                            />
                            <TextInput
                                style={styles.inputtext}
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                        </View>

                    </View>
                    <TouchableOpacity
                        style={styles.loginbtn}
                        onPress={() => {navigation.navigate('HomeMain') }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                            }}
                        >Login</Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            marginVertical: 20,
                            color: '#428FF5',

                        }}

                    >Or, login with...</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={styles.loginicon}
                        //onPress={() => { }}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../img/facebookicon.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.loginicon}
                        //onPress={() => { }}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../img/googleicon.png')}
                            />
                        </TouchableOpacity>
                    </View>
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
    tinyLogo: {
        width: 300,
        height: 300,
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
    loginbtn: {
        width: 250,
        height: 50,
        borderWidth: 1,
        borderColor: '#428FF5',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        backgroundColor: '#428FF5'
    },
    loginicon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
});
