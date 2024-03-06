import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from '../components/styles/stylelcadastro'; // Importa o arquivo de estilo
import HeaderPrincipal from '../components/Geral/headerprincipal'; // Header
import Rodape from '../components/Geral/rodape'; //Rodape
import SubmenuCadastro from '../components/Cadastro/submenu'; //Corpo -- Submenu

export default function Cadastro() { // Alteração aqui: export default function Login()

    const button = () => { // Alteração aqui: Adicionei o "const" para definir a função
        alert("Cadastro sucesso");
    }

    return (
        <View style={styles.container}>
            <HeaderPrincipal />
            <ImageBackground
                style={styles.body}
                source={require('../assets/images/fundocadastro.jpg')}>
                <SubmenuCadastro />
            </ImageBackground>
            <Rodape />
        </View>
    );
}
