import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const links = [
  {
    label: 'GitHub',
    descricao: 'JuniorNascimento2',
    url: 'https://github.com/JuniorNascimento2',
    cor: '#EDE9F8',
  },
  {
    label: 'LinkedIn',
    descricao: 'juniornasciimento',
    url: 'https://www.linkedin.com/in/juniornasciimento/',
    cor: '#7C5CBF',
  },
  {
    label: 'WhatsApp',
    descricao: '(84) 98103-5313',
    url: 'https://wa.me/5584981035313',
    cor: '#F0A500',
  },
  {
    label: 'Instagram',
    descricao: '@juniior_84',
    url: 'https://www.instagram.com/juniior_84',
    cor: '#F0A500',
  },
];

export default function LinksImportantes({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Links</Text>

      {links.map((item) => (
        <TouchableOpacity
          key={item.label}
          style={styles.card}
          onPress={() => Linking.openURL(item.url)}
          activeOpacity={0.7}
        >
          <Text style={[styles.subtitulo, { color: item.cor }]}>{item.label}</Text>
          <Text style={styles.texto}>{item.descricao}</Text>
        </TouchableOpacity>
      ))}

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
    gap: 12,
  },
  titulo: {
    color: '#F0A500',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#1A1429',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2D2050',
    borderLeftWidth: 4,
    borderLeftColor: '#7C5CBF',
    width: '90%',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  texto: {
    color: '#9B8FCC',
    fontSize: 14,
    marginTop: 4,
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
