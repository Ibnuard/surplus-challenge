import * as React from 'react';
import {View, Text, StatusBar, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Touchable from '../../components/touchable';
import {FoodCard, SearchBar} from '../../components';
import {Colors} from '../../styles';
import {fetchAPI} from '../../api/apiUtils';
import {GET_PRODUCTS, GET_RANDOM_MEALS} from '../../api/apis';
import {API_METHOD} from '../../utils/constant';
import {useFocusEffect} from '@react-navigation/native';

const HomeScreen = () => {
  const [productList, setProductList] = React.useState();

  useFocusEffect(
    React.useCallback(() => {
      getAllProductList();
    }, []),
  );

  // === get product list
  const getAllProductList = async () => {
    const data = await fetchAPI(GET_PRODUCTS, API_METHOD.GET);

    if (data) {
      setProductList(data);
    }
  };

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
          data={productList}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <FoodCard key={item + index} data={item} />
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
