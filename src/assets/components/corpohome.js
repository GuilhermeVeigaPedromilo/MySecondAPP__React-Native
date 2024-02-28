import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, Button } from 'react-native';
import styles from '../css/styles';

export default function ContainerHome() {
  return (
        <View style={styles.secondaryContainer}>
          <View style={styles.boxcentral}>
            <Text style= {{color: 'white', fontWeight: 'bold', fontSize: 30, textAlign: 'center', }}>Bem Vindo ao NewSpace</Text>
            <Text style={{color: 'white', textAlign: 'center',}} >Este site, é destino definitivo para aqules que gostam, exploraram e procuram compreender o vasto e fascinante mundo além do nosso pequeno planeta.</Text>
    </View>
    </View>
  );
}


