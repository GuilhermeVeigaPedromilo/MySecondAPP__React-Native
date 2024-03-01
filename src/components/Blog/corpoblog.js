//Corpo ------

import { Text, View, Image, Button } from 'react-native';
import styles from '../styles/styles';// Importando styles
import posts from '../styles/styleposts'; //Importando posts

export default function ContainerBlog() {
  return (
        <View style={styles.thirdContainer}>
          <View style={styles.boxcentralBlog}>
            <Text style= {{color: 'white', fontWeight: 'bold', fontSize: 22, textAlign: 'center', textDecorationLine: 'underline', }}>Bem Vindo ao NewSpace-Blog</Text>
            <Text style={{color: 'white', textAlign: 'center',}} >Veja todas as nossas postagens aqui, atualizações e muito mais do mundo da astronomia</Text>
    </View>
    <View style={posts.posts} >
        <View style={posts.post_one}>
            <Text style= {{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', textDecorationLine: 'underline', }}>NewSpace</Text>
            <Text style={{textAlign: 'center', marginTop: 5,}}>Este App foi feito como exercício do curso de Desenvolvimento de Sistemas--SENAI, para compreensão e aprendizagem da framework React-Native, utilizando React-Navigation/Native-Stack</Text>
            <Image source={require('../../assets/images/senai.png')} style={{width:80, height: 20, marginTop: 20,}} />
        </View>
    </View>
    </View>
  );
}


