import * as React from 'react';
import {View, Text, StatusBar, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Touchable from '../../components/touchable';
import {FoodCard, SearchBar} from '../../components';
import {Colors} from '../../styles';

const HomeScreen = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.COLOR_WHITE}
        barStyle={'dark-content'}
      />
      {/* HEADER CONTAINER */}
      <View style={styles.headerContainer}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <View style={styles.headerLeftChild}>
              <Text style={styles.textYourLocation}>Lokasi Kamu</Text>
              <Icon name="down" color={Colors.COLOR_WHITE} />
            </View>

            <Text style={styles.textLocationValue}>Jl. Petojo Sabangan XI</Text>
          </View>
          <Touchable>
            <Icon name="shoppingcart" size={24} color={Colors.COLOR_WHITE} />
          </Touchable>
        </View>
        <View style={styles.headerBottom}>
          <Text style={styles.textWelcome}>Hi, Surplus Hero!</Text>
          <SearchBar
            containerStyle={styles.searchBar}
            placeholder={'Mau selamatkan makanan apa hari ini?'}
          />
        </View>
        {/* MAIN CONTAINER */}
      </View>
      <View style={styles.mainContainer}>
        <FlatList
          numColumns={3}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => <FoodCard />}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
