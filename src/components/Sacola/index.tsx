import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { iconBag } from '../../assets';
import { WHITE } from '../../styles/styles';

export default function Sacola() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.containerSacola}
      onPress={() => navigation.navigate('Checkout')}
    >
      <Image style={styles.image} source={iconBag} />
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
});
