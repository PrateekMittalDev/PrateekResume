import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Experience from './Experience';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser} from './interfaces';
// import {Constants} from './constants';

function Experiences(): JSX.Element {
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

  // const EXPERIENCES = [
  //   {
  //     role: 'Python Developer',
  //     companyName: 'Exceedance',
  //     timePeriod: 'Aug 2021 - Oct 2021',
  //   },
  //   {
  //     role: 'BackEnd Developer',
  //     companyName: 'InnitfortheTech',
  //     timePeriod: 'Jun 2022 - Aug 2022',
  //   },
  //   {
  //     role: 'Trainee',
  //     companyName: 'GrapeCity India Private Limited',
  //     timePeriod: 'Feb 2023 - Sep 2023',
  //   },
  // ];

  return (
    <View style={styles.Experiences}>
      <Text style={styles.heading}>Experience</Text>
      <FlatList
        data={user?.experiences}
        renderItem={({item}) => (
          <Experience
            role={item.role}
            companyName={item.companyName}
            timePeriod={item.timePeriod}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Experiences: {
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

export default Experiences;
