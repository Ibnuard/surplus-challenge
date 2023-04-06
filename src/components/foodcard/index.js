import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import BurgerSample from '../../../assets/images/burgerSample.jpg';
import Touchable from '../touchable';

const FoodCard = ({data}) => {
  console.log(data);
  return (
    <Touchable style={styles.container}>
      <Image source={BurgerSample} style={styles.image} resizeMode="cover" />
      <View style={styles.mainContainer}>
        <Text style={styles.textTitle} numberOfLines={2}>
          {data?.title}
        </Text>
        <Text style={styles.textDesc}>{data?.category}</Text>
        <Text style={styles.textPrice}>${data?.price}</Text>
      </View>
    </Touchable>
  );
};

export default FoodCard;
