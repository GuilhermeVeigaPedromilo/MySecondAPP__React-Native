//Cabeçalho-------

import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity,  } from 'react-native';
import styles from '../css/styles'; // Importa o arquivo de estilo
import { useNavigation } from '@react-navigation/native';

  function HeaderPrincipal() {
    const navigation = useNavigation();
  return (
    <View style={[styles.containerHeader, { backgroundColor: 'white',}]}>
      <TouchableOpacity
      style={styles.logo}
      onPress={() => navigation.navigate("Home")}>
      <Image 
      style={styles.imagelogo}
      source={require('../../images/imagelogo.png')}
      />
      <Text style={{fontSize: 15, width: 100, marginTop: 15,}} >NewSpace</Text>
      </TouchableOpacity>

      <View style={{backgroundColor: 'black', width: 1, height: '100%'}}></View>
      <View style={styles.Buttons}>
      <TouchableOpacity
      onPress={() => navigation.navigate("Login")}
      >
        <Text>Blog</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate("Login")}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate("Cadastro")}
      >
        <Text>Cadastro</Text>
      </TouchableOpacity>
      
      </View>

    </View>
  );
}

export default HeaderPrincipal;
