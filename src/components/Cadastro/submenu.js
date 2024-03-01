import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button } from 'react-native';
import styles from '../../css/stylelcadastro'; // Importa o arquivo de estilo

export default function SubmenuCadastro() { // Alteração aqui: export default function Login()

    const button = () => { // Alteração aqui: Adicionei o "const" para definir a função
        alert("Cadastro sucesso");
    }

    return (
        <View style={styles.submenu}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Faça seu Cadastro</Text>
            <View style={{ gap: 10, }} >
                <TextInput
                    placeholder='Digite seu nome'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Digite seu CPF'
                    style={styles.input}
                    inputMode='numeric'
                />
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
                    title='Cadastrar'
                    onPress={button}
                    color='black'
                />
            </View>
        </View>
    );
}
