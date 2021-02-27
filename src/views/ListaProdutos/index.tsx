import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Cabecalho from './components/Cabecalho';

export default function ListaProdutos() {
  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f0f4',
  },
});
