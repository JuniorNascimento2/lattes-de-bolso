import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProducoesAcademicas({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Producoes</Text>

      <View style={styles.card}>
        <Text style={styles.subtitulo}>Produções Acadêmicas</Text>
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
    paddingTop: 50,
  },
  titulo: {
    color: '#F0A500',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#1A1429',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2D2050',
    width: '90%',
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
  botao: {
    padding: 15,
    backgroundColor: '#1A1429',
    borderWidth: 1,
    borderColor: '#7C5CBF',
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#EDE9F8',
    fontWeight: 'bold',
  }
});
