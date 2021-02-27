import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { iconBag } from '../../../../assets';
import {
  COR_DE_FUNDO,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_XX_LARGE,
  LIGHTERGRAY,
  LIGHTGRAY,
  WHITE,
} from '../../../../styles/styles';

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
    paddingVertical: 24,
    paddingHorizontal: 6,
  },
  containerSacola: {
    backgroundColor: WHITE,
    padding: 18,
    borderRadius: 30,
  },
  titulo: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_XX_LARGE,
  },
  image: {
    width: 30,
    height: 30,
  },
  containerDescricao: {
    // paddingHorizontal: 16,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: LIGHTGRAY,
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textoDescricao: {
    padding: 34,
    // padding: 24,
    backgroundColor: COR_DE_FUNDO,
    fontFamily: FONT_FAMILY_REGULAR,
    color: LIGHTERGRAY,
    fontSize: FONT_SIZE_MEDIUM,
  },
});
