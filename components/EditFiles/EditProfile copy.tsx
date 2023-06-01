import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {IUser} from '../interfaces';

type Props = {
  user: IUser | undefined;
  handleChange: React.Dispatch<React.SetStateAction<IUser | undefined>>;
};

function EditProfile({user, handleChange}: Props) {
  const updateName = (value: string) => {
    handleChange(prevUser => ({...prevUser, name: value} as IUser));
  };
  const updateRole = (value: string) => {
    handleChange(prevUser => ({...prevUser, role: value} as IUser));
  };
  const updateLocation = (value: string) => {
    handleChange(prevUser => ({...prevUser, location: value} as IUser));
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    color: 'black',
    fontSize: 25,
    paddingTop: 15,
    marginLeft: '10%',
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginLeft: '10%',
    color: 'black',
  },
  heading: {
    fontSize: 15,
    paddingTop: 15,
    marginLeft: '10%',
    color: 'black',
  },
  saveButton: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4dfe0',
    width: '80%',
    marginLeft: '10%',
  },
  buttonText: {
    color: 'black',
  },
});

export default EditProfile;
