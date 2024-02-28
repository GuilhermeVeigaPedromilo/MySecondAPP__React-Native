//Cabeçalho-------

import React from 'react';
import { StyleSheet, Text, View, Image, Button,  } from 'react-native';
import styles from '../css/styles'; // Importa o arquivo de estilo

  function HeaderPrincipal() {

  return (
    <View style={[styles.containerHeader, { backgroundColor: 'white',}]}>
      <Image 
      style={styles.imagelogo}
      source={require('../../images/imagelogo.png')}
      />
      <Text style={{fontSize: 15, width: 100,}} >NewSpace</Text>
      <View style={{backgroundColor: 'black', width: 1, height: '100%', }}></View>
    </View>
  );
}

export default HeaderPrincipal;
