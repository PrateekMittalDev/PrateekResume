import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Skill from './Skill';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser} from './interfaces';
// import {Constants} from './constants';

function Skills(): JSX.Element {
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
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Skills</Text>
        <FlatList
          style={styles.listContainer}
          data={user?.skills}
          renderItem={({item}) => (
            <Skill name={item.skill} link={item.source} />
          )}
          numColumns={3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginTop: '7%',
    // marginLeft: '10%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // marginLeft: Constants.deviceWidth * 0.1,
    // width: '80%',
  },

  heading: {
    color: 'black',
    fontWeight: '500',
    fontSize: 17,
    // marginLeft: 7,
    marginBottom: 30,
  },

  listContainer: {
    marginLeft: -5,
  },
});

export default Skills;
