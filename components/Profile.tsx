import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser} from './interfaces';
import {Circle, Svg} from 'react-native-svg';
// import {withDecay} from 'react-native-reanimated';
// import RoundedImage from './CopyFiles/exampleSVG';
// import {Constants} from './constants';

type Props = {
  height: number;
  width: number;
};

function Profile(): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@User');
      if (jsonValue != null) {
        const value = JSON.parse(jsonValue);
        setUser(value);
      } else {
        console.log('value is null');
        null;
      }
    } catch (e) {
      console.log(e + 'some error occured');
    }
  };

  const setImageRealSize = ({height, width}: Props) => {
    console.log('width=', width, ' height=', height);
  };

  const onLayoutFunction = (event: any) => {
    const {x, y, width, height} = event.nativeEvent.layout;
    console.log('x=', x);
    console.log('y=', y);
    console.log('height=', height);
    console.log('width=', width);
  };

  useEffect(() => {
    console.log('getting renererd');
    getData();
  }, []);

  return (
    <View
      style={styles.profile}
      // onLoad = {({nativeEvent:LayoutEvent}) => void}
      onLayout={onLayoutFunction}>
      <View style={styles.imageContainer}>
        {/* <Image
          style={styles.image}
          source={require('D:/Prateek Mittal/React_Native/PrateekResume/Prateek.jpg')}
        /> */}
        {/* <RoundedImage
          source={require('D:/Prateek Mittal/React_Native/PrateekResume/Prateek.jpg')}
          size={100}
          borderRadius={5}
        /> */}
        <Svg height="95" width="95" viewBox="0 0 200 200">
          <Circle
            cx="99"
            cy="99"
            r="97"
            stroke="blue"
            strokeWidth="4"
            fill="transparent"
          />
          <Image
            style={styles.image}
            onLoad={({
              nativeEvent: {
                source: {width, height},
              },
            }) => setImageRealSize({width, height})}
            source={require('D:/Prateek Mittal/React_Native/PrateekResume/Prateek.jpg')}
          />
        </Svg>
      </View>
      <View>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.designation}>{user?.role}</Text>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" style={styles.location} />
          <Text style={styles.locationText}>{user?.location}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    marginTop: 40,
    flexDirection: 'row',
    marginBottom: 20,
    // marginLeft: '11%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // marginLeft: Constants.deviceWidth * 0.1,
  },

  imageContainer: {
    marginRight: 10,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginRight: 20,
    top: 2,
    left: 2,
  },

  name: {
    color: '#0a0c10',
    fontSize: 25,
    marginBottom: 5,
  },

  designation: {
    fontSize: 18,
    color: '#1a1b1f',
    marginBottom: 5,
  },

  locationContainer: {
    flexDirection: 'row',
  },

  location: {
    top: 1,
    fontSize: 15,
    marginRight: 5,
    color: '#aaabab',
  },

  locationText: {
    fontSize: 15,
    color: '#aaabab',
  },
});

export default Profile;
