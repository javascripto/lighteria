import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import Sacola from '../../../../components/Sacola';
import { bgImg, flechaEsquerda } from '../../../../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Background() {
  const navigation = useNavigation();
  return (
    <View style={styles.bgContainer}>
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        style={styles.imagemFundo}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={flechaEsquerda} style={styles.imagemSeta} />
          </TouchableOpacity>
          <View style={styles.containerSacola}>
            <Sacola />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 6,
  },
  imagemFundo: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagemSeta: {
    width: 24,
    height: 24,
    marginTop: 36,
    marginLeft: 24,
  },
  containerSacola: {
    padding: 18,
  },
});
