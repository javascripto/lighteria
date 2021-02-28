import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { Platform } from 'react-native';

export const formataValor = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(valor)
    .replace(/(\D*)/, Platform.select({ android: '$1 ', ios: '$1' }));
