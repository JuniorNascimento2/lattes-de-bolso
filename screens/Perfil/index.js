import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Perfil({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/perfil.jpeg')}
          style={styles.fotoperfil}
        />
        <View>
          <Text style={styles.nomeTitulo}>Júnior Nascimento</Text>
          <Text style={styles.cargoSubtitulo}>Desenvolvedor Web</Text>
        </View>
      </View>

      <View style={styles.divisor} />

      <View style={styles.infoSection}>
        <View style={styles.card}>
          <Text style={styles.label}>CURSO:</Text>
          <Text style={styles.valor}>Sistemas para Internet</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>IDADE:</Text>
          <Text style={styles.valor}>26 anos</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>E-MAIL:</Text>
          <Text style={styles.valor}>junior.nascimento1@escolar.ifrn.edu.br</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>CIDADE:</Text>
          <Text style={styles.valor}>Pedro Velho - RN</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>Voltar para Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0D0A14',
    padding: 20,
    paddingTop: 80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    gap: 20,
  },
  fotoperfil: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#7C5CBF',
  },
  nomeTitulo: {
    color: '#EDE9F8',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cargoSubtitulo: {
    color: '#9B8FCC',
    fontSize: 14,
    opacity: 0.9,
  },
  divisor: {
    height: 1,
    backgroundColor: '#2D2050',
    marginBottom: 20,
  },
  infoSection: {
    width: '100%',
    gap: 15,
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#1A1429',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    borderLeftWidth: 4,
    borderLeftColor: '#7C5CBF',
    borderWidth: 1,
    borderColor: '#2D2050',
  },
  label: {
    color: '#F0A500',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  valor: {
    color: '#EDE9F8',
    fontSize: 18,
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
