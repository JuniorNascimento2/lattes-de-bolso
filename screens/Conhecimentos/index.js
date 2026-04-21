import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Conhecimentos({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Meus Conhecimentos</Text>

      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.subtitulo}>C#</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>JavaScript</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>TypeScript</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Python</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Angular</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>React</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>MySQL</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>Git</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>HTML</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitulo}>CSS</Text>
        </View>
      </View>
      

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0D0A14',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },
  titulo: {
    color: '#EDE9F8',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
    width: '100%',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#1A1429',
    padding: 20,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#7C5CBF',
    borderWidth: 1,
    borderColor: '#2D2050',
  },
  subtitulo: {
    color: '#EDE9F8',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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
