import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Button } from 'react-native';
import styles from '../components/styles/styles'; // Importando styles
import HeaderPrincipal from '../components/Geral/headerprincipal' // Cabeçalho
import ContainerHome from '../components/Home/corpohome'; // Corpo
import Rodape from '../components/Geral/rodape'; // Rodapé
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/fundoHome.jpg')}
        style={styles.body}
      >
        <HeaderPrincipal />
        <ContainerHome />
        <Rodape />
      </ImageBackground>
    </View>
  );
}