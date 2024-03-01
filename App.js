import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/pages/home'; // Importando página Home
import Login from './src/pages/login'; // Importando página Login
import Cadastro from './src/pages/cadastro'; // Importando página Cadastro
import Blog from './src/pages/blog'; // Importando página Blog

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false,}}/> 
        <Stack.Screen name='Login' component={Login} options={{headerShown: false,}}/>
        <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown: false,}}/>
        <Stack.Screen name='Blog' component={Blog} options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


