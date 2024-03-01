import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from '../styles/stylelogin'; // Importa o arquivo de estilo

export default function Submenu() { // Alteração aqui: export default function Login()

  const button = () => { // Alteração aqui: Adicionei o "const" para definir a função
    alert("Login");
  }

  return (

        <View style={styles.submenu}>
          <Text style={{fontSize: 25, fontWeight: 'bold', }}>Faça Login</Text>
            <View style={{gap: 10,}} >
                  <TextInput
                  placeholder='Digite seu E-mail'
                  style={styles.input}
                  />
                  <TextInput
                  secureTextEntry={true}
                  placeholder='Digite sua senha'
                  style={styles.input}
                  />
                  <Button
                  placeholder='Login'
                  title='Login'
                  onPress={button} 
                  color='black'
                  /> 
                 </View>
      </View>
  );
}
