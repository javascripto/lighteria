import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import {
  WHITE,
  FONT_SIZE_SMALL,
  FONT_FAMILY_SEMI_BOLD,
} from '../../../../styles/styles';
import { Item as TItem } from '../../../../utils/data';

export function Item(props: TItem) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetalhesProduto', { item: props })}
    >
      <Image source={props.imagem} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.texto}>{props.titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 168,
    backgroundColor: WHITE,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  texto: {
    marginTop: 8,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_SMALL,
    color: '#848486',
  },
  imagem: {
    height: 84,
  },
});
