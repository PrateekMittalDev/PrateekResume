import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser} from './interfaces';
// import {Constants} from './constants';
// import StyledText from './Styledtext';

function Introduction(): JSX.Element {
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
      <Text style={styles.text}>{user?.introduction}</Text>
      {/* <StyledText>'Hello'</StyledText> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '4%',
    // marginLeft: '11%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // marginLeft: Constants.deviceWidth * 0.1,
    width: '80%',
  },

  text: {
    color: '#252628',
    fontSize: 15,
  },
});

export default Introduction;
