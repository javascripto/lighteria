import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  WHITE,
  LIGHTBLUE,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_MEDIUM,
} from '../../styles/styles';

export default function Botao({ titulo, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaoContainer}>
        <Text style={styles.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoContainer: {
    backgroundColor: LIGHTBLUE,
    padding: 20,
    borderRadius: 6,
  },
  botaoTexto: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE,
  },
});
