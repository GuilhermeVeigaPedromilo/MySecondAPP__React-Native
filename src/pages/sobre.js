import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Button } from 'react-native';
import styles from '../components/styles/styles'; // Importando styles
import HeaderPrincipal from '../components/Geral/headerprincipal' // Cabeçalho
import Containerabout from '../components/about/corpoabout'; // Corpo
import Rodape from '../components/Geral/rodape'; // Rodapé


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/fundoabout.jpg')}
        style={styles.body}
      >
        <HeaderPrincipal />
        <Containerabout/>
        <Rodape />
      </ImageBackground>
    </View>
  );
}