import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser} from './interfaces';
import Achievement from './Achievement';
// import {Constants} from './constants';

function Achievements(): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@User');
      if (jsonValue != null) {
        const value = JSON.parse(jsonValue);
        setUser(value);
      } else {
        null;
      }
    } catch (e) {
      console.log(e + 'some error occured');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Achievements</Text>
      <FlatList
        data={user?.achievements}
        renderItem={({item}) => (
          <Achievement title={item.title} year={item.year} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '9%',
    // marginLeft: '10%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // width: '80%',
    // marginLeft: Constants.deviceWidth * 0.1,
    marginBottom: '9%',
  },

  heading: {
    color: 'black',
    fontWeight: '500',
    fontSize: 17,
    // marginLeft: 7,
    marginBottom: 30,
  },
});

export default Achievements;
