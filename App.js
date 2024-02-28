import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Button } from 'react-native';
import styles from './src/assets/css/styles';
import HeaderPrincipal from './src/assets/components/headerprincipal'
import ContainerHome from './src/assets/components/corpohome';
import Rodape from './src/assets/components/rodape';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/images/fundoHome.jpg')}
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


