import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Cursos({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Cursos</Text>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>Mecânica</Text>
        <Text style={styles.texto}>IFRN Campus Canguaretama</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>Sistemas para Internet</Text>
        <Text style={styles.texto}>IFRN Campus Canguaretama</Text>
      </View>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0A14',
    alignItems: 'center',
    paddingTop: 80,
    gap: 10,
  },
  titulo: {
    color: '#EDE9F8',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#1A1429',
    padding: 15,
    borderRadius: 8,
    width: '90%',
    borderLeftWidth: 4,
    borderLeftColor: '#7C5CBF',
    borderWidth: 1,
    borderColor: '#2D2050',
  },
  subtitulo: {
    color: '#F0A500',
    fontSize: 18,
    fontWeight: 'bold',
  },
  texto: {
    color: '#EDE9F8',
    fontSize: 16,
    marginTop: 5,
  },
  botaoVoltar: {
    color: '#EDE9F8',
    fontSize: 18,
    padding: 15,
    width: 100,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#7C5CBF',
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#7C5CBF',
    fontSize: 18,
  }
});
