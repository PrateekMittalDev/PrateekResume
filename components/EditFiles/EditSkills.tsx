import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {IUser} from '../interfaces';

type Props = {
  user: IUser | undefined;
  handleChange: React.Dispatch<React.SetStateAction<IUser | undefined>>;
};
function EditSkills({user, handleChange}: Props) {
  const updateSkill = (value: string, index: number) => {
    handleChange(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedSkills = [...prevUser.skills];
      updatedSkills[index].skill = value;
      return {...prevUser, skills: updatedSkills};
    });
  };
  const updateSource = (value: string, index: number) => {
    handleChange(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedSkills = [...prevUser.skills];
      updatedSkills[index].source = value;
      return {...prevUser, skills: updatedSkills};
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills:</Text>
      {user?.skills.map((value, index) => (
        <View key={index} style={styles.valueContainer}>
          <Text style={styles.heading}>Image:</Text>
          <Image style={styles.logo} source={{uri: value.source}} />
          <Text style={styles.heading}>Skill:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => updateSkill(text, index)}
            value={value.skill}
            placeholder={value.skill}
          />
          <Text style={styles.heading}>Image Source:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => updateSource(text, index)}
            value={value.source}
            placeholder={value.source}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    marginTop: '2%',
    marginLeft: '10%',
    height: 50,
    width: 50,
  },

  title: {
    fontSize: 25,
    paddingTop: 15,
    marginLeft: '10%',
    color: 'black',
  },
  valueContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
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

export default EditSkills;
