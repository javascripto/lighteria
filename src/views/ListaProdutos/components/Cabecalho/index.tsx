import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { iconBag } from '../../../../assets';

export default function Cabecalho() {
  return (
    <>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>Lighteria</Text>
        <View style={styles.containerSacola}>
          <Image style={styles.image} source={iconBag} />
        </View>
      </View>
      <View style={styles.containerDescricao}>
        <View style={styles.separador} />
        <View style={styles.containerTexto}>
          <Text style={styles.textoDescricao}>Categorias</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  containerSacola: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 30,
  },
  titulo: {
    fontFamily: 'OpenSans-ExtraBold',
    fontSize: 28,
  },
  image: {
    width: 30,
    height: 30,
  },
  containerDescricao: {
    paddingHorizontal: 16,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textoDescricao: {
    padding: 34,
    // padding: 24,
    backgroundColor: '#F4F0F4',
    fontFamily: 'OpenSans-Regular',
    color: '#A1A5AA',
    fontSize: 16,
  },
});
