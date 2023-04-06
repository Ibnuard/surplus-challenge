import * as React from 'react';
import {View, Text, StatusBar, FlatList, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Touchable from '../../components/touchable';
import {FoodCard, SearchBar} from '../../components';
import {Colors} from '../../styles';
import {fetchAPI} from '../../api/apiUtils';
import {GET_PRODUCTS} from '../../api/apis';
import {API_METHOD} from '../../utils/constant';
import {useFocusEffect} from '@react-navigation/native';

const HomeScreen = () => {
  const [productList, setProductList] = React.useState();
  const [search, setSearch] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      getAllProductList();
    }, []),
  );

  // === get product list
  const getAllProductList = async () => {
    setIsLoading(true);
    const data = await fetchAPI(GET_PRODUCTS, API_METHOD.GET);

    if (data) {
      setProductList(data);
      setIsLoading(false);
    }
  };

  // === filter product
  const filterProduct = (data = []) => {
    return data.filter((item, index) => {
      return item?.title?.toLowerCase().includes(search.toLowerCase());
    });
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
            onChangeText={text => setSearch(text)}
            value={search}
          />
        </View>
        {/* MAIN CONTAINER */}
      </View>
      <View style={styles.mainContainer}>
        {isLoading ? (
          <ActivityIndicator style={styles.loadingIndicator} />
        ) : filterProduct(productList).length > 0 ? (
          <FlatList
            numColumns={3}
            data={filterProduct(productList)}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <FoodCard key={item + index} data={item} />
            )}
          />
        ) : (
          <View style={styles.noDataContainer}>
            <Icon name="frowno" size={24} />
            <Text style={styles.textNoData}>No Data</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
