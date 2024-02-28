import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Button } from 'react-native';
import styles from '../assets/css/styles';
import HeaderPrincipal from '../assets/components/headerprincipal' // Cabeçalho
import ContainerHome from '../assets/components/corpohome'; // Corpo
import Rodape from '../assets/components/rodape'; // Rodapé
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/fundoHome.jpg')}
        style={styles.body}
      >
        <View style={{ width: '100%', }} >
          <HeaderPrincipal /> 
        </View>
        <ContainerHome/>
        <Rodape/>
      </ImageBackground>
    </View>
  );
}