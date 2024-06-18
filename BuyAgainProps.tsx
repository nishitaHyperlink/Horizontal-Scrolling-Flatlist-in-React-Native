import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet} from 'react-native';
import {Divider} from 'react-native-paper';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import Cart from '../screens/Cart';

import Modal from "react-native-modalbox";
import { useNavigation } from '@react-navigation/native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';


const { width, height } = Dimensions.get("window");

const DATA2 = [
  {
    id: '1',
    kg: '4.1 kg per unit',
    kg2: '',
    name: 'Mutti',
    detail: 'Polpa di san marziano del\nmodena due torri',
    image: require('../assets/mutti.png'),
    image2: require('../assets/Icons.png'),
    image3: require('../assets/Vect.png'),
    image4: require('../assets/product.png'),
    image5: require('../assets/miniCart.png'),
  },
  {
    id: '2',
    kg2: 'approx 4.1 kg per unit',
    kg: '',
    name: 'Mutti',
    detail: 'Polpa di san marziano del\nmodena due torri',
    image: require('../assets/image.png'),
    image2: require('../assets/Icons.png'),
    image3: require('../assets/Vect.png'),
    image4: '',
    image5: require('../assets/miniCart.png'),
  },
  {
    id: '3',
    kg: '4.1 kg per unit',
    name: 'Mutti',
    kg2: '',
    detail: 'Polpa di san marziano del\nmodena due torri',
    image: require('../assets/mutti.png'),
    image2: require('../assets/Icons.png'),
    image3: require('../assets/Vect.png'),
    image4: '',
    image5: require('../assets/miniCart.png'),
  },
  {
    id: '4',
    kg: '4.1 kg per unit',
    name: 'Mutti',
    kg2: '',
    detail: 'Polpa di san marziano del\nmodena due torri',
    image: require('../assets/image.png'),
    image2: require('../assets/Icons.png'),
    image3: require('../assets/Vect.png'),
    image4: '',
    image5: require('../assets/miniCart.png'),
  },
];

const BuyAgainProps = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const navigation = useNavigation();

 


  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
         
          alignContent: 'center',
          
           marginRight: -171, 
            marginLeft:10,
            width:375,
             right:12,
             // left:2
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: 205,
            height: 261,
            bottom: 10,
            marginLeft: 10,
            marginTop: 1,
            marginRight: -1,

            borderRadius: 16,
            shadowColor: '#B3B3B3',
            shadowOffset: {width: 1, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 10,
            elevation: 15,

            padding: 10,
            margin: 15,
          }}>
         
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 16,
              padding: 10,
              margin: 0,
              position: 'absolute',
              top: 10,
              left: 8,
            }}>
            <Image
              style={{position: 'absolute', top: 0, left: 0}}
              source={item.image2}
            />
            <View
              style={{
                height: 115,
                width: 174,
                position: 'absolute',
                left: 8,
                top: 2,
              }}>
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetailPage')} style={{ height: 115,
                width: 174,
                position: 'absolute',
                left: 8,
                top: 2,}}> 
               <Image
                style={{
                  resizeMode: 'contain',
                  width: 115,
                  height: 115,
                  position: 'absolute',
                  top: 5,
                  left: 30,
                }}
                source={item.image}
              /></TouchableOpacity>

              {item.image4 != '' && (
                <Image
                  style={{
                    position: 'absolute',
                    top: 3,
                    left: 40,
                    width: 70,
                    height: 20,
                  }}
                  source={item.image4}
                />
              )}
              <Divider
                style={{
                  borderWidth: 1,
                  width: 189,
                  borderColor: '#EEEEEE',
                  position: 'absolute',
                  top: 120,
                  left: -8,
                }}
              />
            </View>

            <View
              style={{
                width: 189,
                height: 110,
                backgroundColor: 'white',
                position: 'absolute',
                top: 130,
              }}>
              {item.kg != '' && (
                <View
                  style={{
                    width: 103,
                    height: 18,
                    borderWidth: 1,
                    borderColor: '#EEEEEE',
                    borderRadius: 4,
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{position: 'absolute', top: 2, left: 3}}
                    source={item.image3}
                  />
                  <Text
                    style={{
                      fontSize: 11,
                      color: '#757575',
                      position: 'absolute',
                      left: 15,
                      bottom: 0,
                    }}>
                    {item.kg}
                  </Text>
                </View>
              )}
              {item.kg2 != '' && (
                <View
                  style={{
                    width: 148,
                    height: 18,
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: '#EEEEEE',
                  }}>
                  <Image
                    style={{position: 'absolute', top: 2, left: 3}}
                    source={item.image3}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#757575',
                      position: 'absolute',
                      left: 20,
                      bottom: 2,
                    }}>
                    {item.kg2}
                  </Text>
                </View>
              )}
              <View
                style={{
                  width: 189,
                  height: 54,
                  backgroundColor: 'white',
                  position: 'absolute',
                  top: 20,
                }}>
                <Text style={{fontSize: 12, color: '#757575'}}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#212121',
                    lineHeight: 18,
                    fontWeight: '500',
                  }}>
                  {item.detail}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate('Cart', { item })}
                style={{
                  width: 189,
                  height: 28,
                  borderRadius: 8,
                  borderColor: '#297948',
                  borderWidth: 1,
                  position: 'absolute',
                  bottom: 5,
                  backgroundColor: '#E9FCE9',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#297948',
                    position: 'absolute',
                    top: 4,
                    left: 10,
                  }}>
                  Add to Cart
                </Text>
                <Image
                  style={{
                    width: 15,
                    height: 15,
                    position: 'absolute',
                    top: 4,
                    right: 10,
                  }}
                  source={item.image5}
                />
              </TouchableOpacity>
            </View>
          </View>
         
        </View>
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      data={DATA2}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({

})
export default BuyAgainProps;
