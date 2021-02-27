import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { DATA } from '../../utils/data';
import { Item } from './components/Produto';
import Cabecalho from './components/Cabecalho';

export default function ListaProdutos() {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Cabecalho />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
});
