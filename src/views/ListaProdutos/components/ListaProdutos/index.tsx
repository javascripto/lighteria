import React from 'react';
import { FlatList, View } from 'react-native';

import Cabecalho from '../Cabecalho';
import { DATA } from '../../../../utils/data';

export default function ListaProdutos() {
  return (
    <View>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={({ item }) => <View />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Cabecalho />}
      />
    </View>
  );
}
