import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';

import {
  WHITE,
  BLACK,
  LIGHTERGRAY,
  LIGHTGRAY,
  FONT_SIZE_SMALL,
  FONT_SIZE_MEDIUM,
  FONT_FAMILY_BOLD,
  FONT_SIZE_XX_LARGE,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_LARGE,
} from '../../../../styles/styles';
import Botao from '../../../../components/Botao';
import { formataValor } from '../../../../utils/utils';
import { Item as TItem } from '../../../../utils/data';

export default function DescricaoItem(props: TItem) {
  const navigation = useNavigation();
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <View style={styles.textoPosicao}>
            <View>
              <Text style={styles.textoSuperior}>{props.estudio}</Text>
              <Text style={styles.textoMedio}>{props.itemName}</Text>
              <Text style={styles.textoInferior}>{props.titulo}</Text>
            </View>
            <Image style={styles.imagem} source={props.imagem} />
          </View>
          <View>
            <Text>{props.itemDesc}</Text>
          </View>
          <View style={styles.rodape}>
            <Text style={styles.moeda}>{formataValor(props.preco)}</Text>
            <Botao
              titulo="COMPRAR"
              onPress={() => navigation.navigate('Checkout')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 4,
    marginTop: -60,
  },
  itemPosicao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: WHITE,
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4,
  },
  imagem: {
    width: 30,
    height: 72,
  },
  textoPosicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textoSuperior: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    marginBottom: 4,
  },
  textoMedio: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_XX_LARGE,
    marginBottom: 4,
  },
  textoInferior: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    marginBottom: 4,
    color: LIGHTGRAY,
  },
  itemDescricao: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    marginTop: 10,
    color: LIGHTERGRAY,
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  moeda: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_LARGE,
    color: BLACK,
  },
});
