import React, {useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser} from './interfaces';

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

  useEffect(() => {
    console.log('getting renererd');
    getData();
  }, []);

  return (
    <View style={styles.profile}>
      <View>
        <Image
          style={styles.image}
          source={require('D:/Prateek Mittal/React_Native/PrateekResume/Prateek.jpg')}
        />
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
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
  },

  name: {
    color: '#0a0c10',
    fontSize: 25,
    marginBottom: 5,
  },

  designation: {
    fontSize: 15,
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
    color: '#aaabab',
  },
});

export default Profile;
