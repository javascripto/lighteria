import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Botao from '../../components/Botao';
import { CheckoutItem } from './CheckoutItem';
import { useDataContext } from '../../provider';
import { formataValor } from '../../utils/utils';
import {
  LIGHTBLUE,
  FONT_SIZE_LARGE,
  FONT_SIZE_SMALL,
  FONT_FAMILY_BOLD,
  FONT_SIZE_XX_LARGE,
} from '../../styles/styles';

export default function Checkout() {
  const { itemsCheckout, valorTotal } = useDataContext();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Checkout</Text>
      {itemsCheckout.map((item) => (
        <CheckoutItem key={item.id} {...item} />
      ))}
      <Text style={styles.total}>{formataValor(valorTotal)}</Text>
      <Botao titulo="Finalizar compra" onPress={() => {}} />
      <TouchableOpacity onPress={() => navigation.navigate('ListaProdutos')}>
        <Text style={styles.continuarTexto}>Continuar comprando</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  titulo: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_XX_LARGE,
    marginBottom: 10,
  },
  total: {
    fontSize: FONT_SIZE_LARGE,
    fontFamily: FONT_FAMILY_BOLD,
    marginVertical: 36,
  },
  continuarTexto: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_SMALL,
    color: LIGHTBLUE,
    marginTop: 20,
    textAlign: 'center',
  },
});
