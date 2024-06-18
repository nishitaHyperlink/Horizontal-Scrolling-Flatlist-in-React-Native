import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const { width, height } = Dimensions.get('window');
const DATA = [
  { id: '1', image: require('../assets/Content.png') },
  { id: '2', image: require('../assets/Content.png') },
  { id: '3', image: require('../assets/Content.png') },
  { id: '4', image: require('../assets/Content.png') },
  { id: '5', image: require('../assets/Content.png') },
];

const FeaturedProps = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const { width, height } = useWindowDimensions();
  const renderItem = ({ item, index }: any) => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignContent: 'center',
          marginRight: -75,
          marginLeft: 40,
          width: 375,
          right: 35,
          left: -32,
        }}
      >
        <View style={{ width, height: 218, marginRight: 10 }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 328.24,
              height: 210,
              bottom: 10,
              marginLeft: 10,
              marginTop: 1,
              marginRight: -1,
  
              borderRadius: 16,
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 10,
              elevation: 15,
  
              padding: 10,
              margin: 15,
            }}
          >
         
              <View style={{ position: 'absolute', top: 10, left: 10 }}>
                <TouchableWithoutFeedback>
                  <Image
                    style={{
                      height: 190,
                      width: 308.24,
                      borderRadius: 8,
                      padding: 8,
                    }}
                    source={item.image}
                  />
                </TouchableWithoutFeedback>
              </View>
           
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      horizontal
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default FeaturedProps;
