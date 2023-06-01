import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Education from './Education';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser} from './interfaces';

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

  // const EDUCATIONS = [
  //   {
  //     standard: 'X',
  //     year: '2017',
  //     marks: '9.2 CGPA',
  //   },
  //   {
  //     standard: 'XII',
  //     year: '2019',
  //     marks: '89%',
  //   },
  //   {
  //     standard: 'B.tech',
  //     year: '2023',
  //     marks: '9.032 CGPA',
  //   },
  // ];

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
    marginLeft: '10%',
    width: '80%',
  },

  heading: {
    color: 'black',
    fontWeight: '500',
    fontSize: 17,
    marginLeft: 7,
    marginBottom: 30,
  },
});

export default Educations;
