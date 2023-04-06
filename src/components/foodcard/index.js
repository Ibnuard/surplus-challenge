import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import BurgerSample from '../../../assets/images/burgerSample.jpg';
import Touchable from '../touchable';

const FoodCard = () => {
  return (
    <Touchable style={styles.container}>
      <Image source={BurgerSample} style={styles.image} resizeMode="cover" />
      <View style={styles.mainContainer}>
        <Text style={styles.textTitle}>Judul</Text>
        <Text style={styles.textDesc}>Desc</Text>
        <Text style={styles.textPrice}>Price</Text>
      </View>
    </Touchable>
  );
};

export default FoodCard;
