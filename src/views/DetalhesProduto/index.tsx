import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Item as TItem } from '../../utils/data';

import Background from './components/Background';
import DescricaoItem from './components/DescricaoItem';

export default function DetalhesProduto({ route }) {
  const item = route.params.item as TItem;
  return (
    <View style={styles.container}>
      <Background />
      <DescricaoItem {...item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
