import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {IUser} from '../interfaces';

type Props = {
  user: IUser | undefined;
  handleChange: React.Dispatch<React.SetStateAction<IUser | undefined>>;
};

function EditIntroduction({user, handleChange}: Props) {
  const updateIntroduction = (value: string) => {
    handleChange(prevUser => ({...prevUser, introduction: value} as IUser));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Introduction:</Text>
      <TextInput
        multiline
        style={styles.input}
        onChangeText={updateIntroduction}
        value={user?.introduction}
        placeholder={user?.introduction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 25,
    paddingTop: 15,
    marginLeft: '10%',
    color: 'black',
  },
  input: {
    height: 80,
    margin: 10,
    color: 'black',
    padding: 10,
    width: '80%',
    marginLeft: '10%',
    borderWidth: 1,
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

export default EditIntroduction;
