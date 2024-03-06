import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Button } from 'react-native';
import styles from '../components/styles/styles'; // Importando styles
import HeaderPrincipal from '../components/Geral/headerprincipal' // Cabeçalho
import Rodape from '../components/Geral/rodape'; // Rodapé
import { useNavigation } from '@react-navigation/native';
import ContainerBlog from '../components/Blog/corpoblog';//Corpo

export default function Blog() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/fundoblog.jpg')}
        style={styles.body}
      >
        <HeaderPrincipal />
        <ContainerBlog />
        <Rodape />
      </ImageBackground>
    </View>
  );
}