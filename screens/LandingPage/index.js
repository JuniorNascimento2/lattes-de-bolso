import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.logo}>MΞU LΛTTΞS</Text>

        <View style={styles.typingContainer}>
          <Text style={styles.subtitulo}>
            Inicializando sistema...{"\n"}
            Carregando competências...{"\n"}
            Acesso autorizado.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.botaoEntrar}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.textoBotao}>ENTRAR NO SISTEMA</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>v1.0.0 | Desenvolvido por Júnior Nascimento</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0A14',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    color: '#F0A500',
    fontSize: 42,
    fontWeight: 'bold',
    letterSpacing: 5,
    marginBottom: 20,
    textShadowColor: '#F0A500',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  typingContainer: {
    height: 100,
    marginBottom: 50,
  },
  subtitulo: {
    color: '#9B8FCC',
    fontSize: 16,
    fontFamily: 'monospace',
    lineHeight: 25,
    opacity: 0.85,
  },
  botaoEntrar: {
    borderWidth: 2,
    borderColor: '#7C5CBF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  textoBotao: {
    color: '#EDE9F8',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  footer: {
    position: 'absolute',
    bottom: -120,
    color: '#2D2050',
    fontSize: 10,
  },
});
