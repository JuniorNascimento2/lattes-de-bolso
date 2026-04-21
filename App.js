import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './screens/LandingPage';
import Home from './screens/Home';
import Perfil from './screens/Perfil';
import Formacao from './screens/Formacao';
import Cursos from './screens/Cursos';
import Producoes from './screens/ProducoesAcademicas';
import Conhecimentos from './screens/Conhecimentos';
import Links from './screens/LinksImportantes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="LandingPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ title: 'Landing Page' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Lattes de Bolso' }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ title: 'Meu Perfil' }} />
        <Stack.Screen name="Formacao" component={Formacao} options={{ title: 'Formação Acadêmica' }} />
        <Stack.Screen name="Cursos" component={Cursos} options={{ title: 'Cursos' }} />
        <Stack.Screen name="Producoes" component={Producoes} options={{ title: 'Produções' }} />
        <Stack.Screen name="Conhecimentos" component={Conhecimentos} options={{ title: 'Habilidades' }} />
        <Stack.Screen name="Links" component={Links} options={{ title: 'Links' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}