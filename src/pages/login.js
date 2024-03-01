import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from '../components/styles/stylelogin'; // Importa o arquivo de estilo
import HeaderPrincipal from '../components/Geral/headerprincipal'; // Cabeçalho
import Rodape from '../components/Geral/rodape'; // Rodapé
import Submenu from '../components/Login/submenu'; //Corpo -- Submenu

export default function Login() { // Alteração aqui: export default function Login()

  const button = () => { // Alteração aqui: Adicionei o "const" para definir a função
    alert("Login");
  }

  return (
    <View style={styles.container}>
      <HeaderPrincipal/>
      <ImageBackground 
        style={styles.body}
        source={require('../assets/images/fundologin.jpg')}>
          <Submenu/>
        </ImageBackground>
        <Rodape/>
      </View>
  );
}
