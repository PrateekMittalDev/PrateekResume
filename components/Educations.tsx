import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Education from './Education';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser} from './interfaces';
// import {Constants} from './constants';

function Educations(): JSX.Element {
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
    <View style={styles.Educations}>
      <Text style={styles.heading}>Education</Text>
      <FlatList
        data={user?.educations}
        renderItem={({item}) => (
          <Education
            standard={item.standard}
            year={item.year}
            marks={item.marks}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Educations: {
    marginTop: '9%',
    // marginLeft: '10%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // width: '80%',
    // marginLeft: Constants.deviceWidth * 0.1,
  },

  heading: {
    color: 'black',
    fontWeight: '500',
    fontSize: 17,
    // marginLeft: 7,
    marginBottom: 30,
  },
});

export default Educations;
