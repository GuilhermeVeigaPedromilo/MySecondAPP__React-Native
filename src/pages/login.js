import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from '../assets/css/stylelogin'; // Importa o arquivo de estilo
import HeaderPrincipal from '../assets/components/headerprincipal';
import Rodape from '../assets/components/rodape';

export default function Login() { // Alteração aqui: export default function Login()

  const button = () => { // Alteração aqui: Adicionei o "const" para definir a função
    alert("Login");
  }

  return (
    <View style={styles.container}>
      <HeaderPrincipal/>
      <ImageBackground 
        style={styles.body}
        source={require('../images/fundologin.jpg')}>
          
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
        </ImageBackground>
        <Rodape/>
      </View>
  );
}
