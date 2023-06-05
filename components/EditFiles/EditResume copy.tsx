import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser} from '../interfaces';

function EditResume(props: any) {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getData();
  }, []);

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

  const updateName = (value: string) => {
    setUser(prevUser => ({...prevUser, name: value} as IUser));
  };
  const updateRole = (value: string) => {
    setUser(prevUser => ({...prevUser, role: value} as IUser));
  };
  const updateLocation = (value: string) => {
    setUser(prevUser => ({...prevUser, location: value} as IUser));
  };
  const updateIntroduction = (value: string) => {
    setUser(prevUser => ({...prevUser, introduction: value} as IUser));
  };

  const saveChanges = async () => {
    console.log('changes are saved');
    try {
      await AsyncStorage.setItem('@User', JSON.stringify(user));
      props.navigation.reset({
        index: 0,
        routes: [{name: 'Resume'}],
      });
    } catch (e) {
      console.log('Error occured: ', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile:</Text>

      <Text style={styles.heading}>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={updateName}
        value={user?.name}
        placeholder={user?.name}
      />

      <Text style={styles.heading}>Role</Text>
      <TextInput
        style={styles.input}
        onChangeText={updateRole}
        value={user?.role}
        placeholder={user?.role}
      />

      <Text style={styles.heading}>Location</Text>
      <TextInput
        style={styles.input}
        onChangeText={updateLocation}
        value={user?.location}
        placeholder={user?.location}
      />

      <Text style={styles.title}>Introduction:</Text>
      <TextInput
        editable
        style={styles.input}
        multiline
        numberOfLines={4}
        onChangeText={updateIntroduction}
        value={user?.introduction}
        placeholder={user?.introduction}
      />
      <Text style={styles.title}>Education:</Text>
      <Pressable
        onPress={() => {
          saveChanges();
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'pink' : 'yellow',
          },
          styles.editButton,
        ]}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    paddingTop: 15,
    paddingLeft: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  heading: {
    fontSize: 15,
    paddingTop: 15,
    paddingLeft: 15,
  },
  editButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'blue',
  },
});

export default EditResume;
