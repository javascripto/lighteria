import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { iconBag } from '../../assets';
import { useDataContext } from '../../provider';
import { WHITE, RED, FONT_FAMILY_SEMI_BOLD } from '../../styles/styles';

export default function Sacola() {
  const navigation = useNavigation();
  const { quantidade } = useDataContext();
  return (
    <TouchableOpacity
      style={styles.containerSacola}
      onPress={() => navigation.navigate('Checkout')}
    >
      <Image style={styles.image} source={iconBag} />
      <View style={styles.containerQuantidade}>
        <Text style={styles.textoQuantidade}>{quantidade}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerSacola: {
    backgroundColor: WHITE,
    padding: 18,
    borderRadius: 30,
  },
  image: {
    width: 30,
    height: 30,
  },
  containerQuantidade: {
    backgroundColor: RED,
    borderRadius: 100,
    marginTop: -22,
    marginLeft: 11,
  },
  textoQuantidade: {
    textAlign: 'center',
    padding: 4,
    fontSize: 10,
    color: WHITE,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
  },
});
