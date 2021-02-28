import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { COR_DE_FUNDO } from './styles/styles';
import ListaProdutos from './views/ListaProdutos';
import DetalhesProduto from './views/DetalhesProduto';

const Stack = createStackNavigator();
const { Screen, Navigator } = Stack;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Navigator initialRouteName="ListaProdutos">
          <Screen
            name="ListaProdutos"
            component={ListaProdutos}
            options={{ headerShown: false }}
          />
          <Screen
            name="DetalhesProduto"
            component={DetalhesProduto}
            options={{ headerShown: false }}
          />
        </Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_DE_FUNDO,
  },
});
