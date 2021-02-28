import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import {
  WHITE,
  FONT_SIZE_SMALL,
  FONT_SIZE_MEDIUM,
  FONT_FAMILY_LIGHT,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_SEMI_BOLD,
} from '../../styles/styles';
import { TItem } from '../../provider';
import { formataValor } from '../../utils/utils';

export function CheckoutItem(props: TItem) {
  return (
    <View style={styles.containerItem}>
      <View style={styles.imagemContainer}>
        <Image style={styles.imagem} source={props.imagem} />
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.descTextoSuperior}>{props.itemName}</Text>
        <Text style={styles.descTextoInferior}>{props.titulo}</Text>
      </View>
      <View style={styles.precoContainer}>
        <Text style={styles.precoTexto}>
          {formataValor(props.preco * props.quantidade)}
        </Text>
        <Text style={styles.precoTexto}>Qtd: {props.quantidade}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  imagemContainer: {
    flex: 20,
    backgroundColor: '#F7F8FC',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 40,
    height: 50,
  },
  descContainer: {
    flex: 25,
    padding: 18,
    justifyContent: 'center',
  },
  descTextoSuperior: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_MEDIUM,
  },
  descTextoInferior: {
    fontFamily: FONT_FAMILY_LIGHT,
    fontSize: FONT_SIZE_SMALL,
  },
  precoContainer: {
    flex: 35,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  precoTexto: {
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
