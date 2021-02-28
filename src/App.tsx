import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import Checkout from './views/Checkout';
import { DataProvider } from './provider';
import { COR_DE_FUNDO } from './styles/styles';
import ListaProdutos from './views/ListaProdutos';
import DetalhesProduto from './views/DetalhesProduto';

const Stack = createStackNavigator();
const { Screen, Navigator } = Stack;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COR_DE_FUNDO} />
      <DataProvider>
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
            <Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
          </Navigator>
        </NavigationContainer>
      </DataProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COR_DE_FUNDO,
  },
});
