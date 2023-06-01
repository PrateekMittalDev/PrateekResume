import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Achievement from '../Achievement';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser} from '../interfaces';

function Achievements(): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@User');
      if (jsonValue != null) {
        const value = JSON.parse(jsonValue);
        setUser(value);
      } else {
        setUser(null);
      }
    } catch (e) {
      console.log(e + 'some error occured');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={[styles.Achievements]}>
      <Text style={styles.heading}>Achievements</Text>
      {user?.achievements && user?.achievements.length > 0 ? (
        <FlatList
          data={user?.achievements}
          renderItem={({item}) => (
            <Achievement title={item.title} year={item.year} />
          )}
          keyExtractor={(item, index) => `${item.title}-${index}`}
        />
      ) : (
        <Text>No achievements found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Achievements: {
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

export default Achievements;
