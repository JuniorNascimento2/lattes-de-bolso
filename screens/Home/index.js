import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={estilos.container}>

      <View style={estilos.cabecalhoLinha}>
        <TouchableOpacity onPress={() => navigation.navigate('LandingPage')}>
          <Ionicons
            name='arrow-undo'
            size={32}
            color='#F0A500'
            style={estilos.icone}
          />
        </TouchableOpacity>
        <Text style={estilos.titulo}>Meu Lattes</Text>
      </View>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Text style={estilos.textoBotao}>Ir para Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Formacao')}
      >
        <Text style={estilos.textoBotao}>Ir para Formação</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Cursos')}
      >
        <Text style={estilos.textoBotao}>Ir para Cursos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Conhecimentos')}
      >
        <Text style={estilos.textoBotao}>Ir para Conhecimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Links')}
      >
        <Text style={estilos.textoBotao}>Ir para Links</Text>
      </TouchableOpacity>

      {/*<TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('ProducoesAcademicas')}
      >
        <Text style={estilos.textoBotao}>Ir para Produções Acadêmicas</Text>
      </TouchableOpacity>*/}

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0D0A14',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    paddingVertical: 40,
  },
  cabecalhoLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icone: {
    marginRight: 15,
  },
  titulo: {
    color: '#F0A500',
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: '#F0A500',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  botao: {
    backgroundColor: '#1A1429',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#7C5CBF',
    width: '80%',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#EDE9F8',
    fontSize: 16,
    fontWeight: '500',
  },
});
