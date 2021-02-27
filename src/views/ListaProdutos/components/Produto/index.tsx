import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export function Item({ imagem, titulo }) {
  return (
    <View style={styles.container}>
      <Image source={imagem} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.texto}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 168,
    backgroundColor: '#fff',
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  texto: {
    marginTop: 8,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: '#848486',
  },
  imagem: {
    height: 84,
  },
});
