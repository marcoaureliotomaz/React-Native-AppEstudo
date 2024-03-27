import React, { Component, useState } from "react";
import { View, Text ,TextInput , Button, StyleSheet, Image   } from 'react-native';


export default function Login({navigation}: {navigation: any}){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('Email:', email);
    console.log('Senha:', password);
    navigation.navigate('Admin' ) 
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

   
      return (
        <View style={styles.container}>
          <Text style={{ color:'#02026b'}}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={{ color:'#02026b', alignContent:'flex-start'}}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua Senha"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Logar" onPress={handleLogin} />
            </View>
            <View style={styles.button}>
              <Button title="Voltar" onPress={handleGoBack} />
            </View>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20,
      },
      input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#517de6',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
      },
      button: {
        marginHorizontal: 5,
      },
      buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
    });
    
    