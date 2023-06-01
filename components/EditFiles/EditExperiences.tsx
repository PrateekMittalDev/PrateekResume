import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {IUser} from '../interfaces';

type Props = {
  user: IUser | undefined;
  handleChange: React.Dispatch<React.SetStateAction<IUser | undefined>>;
};
function EditExperiences({user, handleChange}: Props) {
  const updateRole = (value: string, index: number) => {
    handleChange(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedExperiences = [...prevUser.experiences];
      updatedExperiences[index].role = value;
      return {...prevUser, experiences: updatedExperiences};
    });
  };
  const updateCompanyName = (value: string, index: number) => {
    handleChange(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedExperiences = [...prevUser.experiences];
      updatedExperiences[index].companyName = value;
      return {...prevUser, experiences: updatedExperiences};
    });
  };
  const updateTimePeriod = (value: string, index: number) => {
    handleChange(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedExperiences = [...prevUser.experiences];
      updatedExperiences[index].timePeriod = value;
      return {...prevUser, experiences: updatedExperiences};
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiences:</Text>
      {user?.experiences.map((experience, index) => (
        <View key={index} style={styles.experienceContainer}>
          <Text style={styles.heading}>Role:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => updateRole(text, index)}
            value={experience.role}
            placeholder={experience.role}
          />
          <Text style={styles.heading}>Company:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => updateCompanyName(text, index)}
            value={experience.companyName}
            placeholder={experience.companyName}
          />
          <Text style={styles.heading}>Time Period:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => updateTimePeriod(text, index)}
            value={experience.timePeriod}
            placeholder={experience.timePeriod}
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
  title: {
    fontSize: 25,
    paddingTop: 15,
    marginLeft: '10%',
    color: 'black',
  },
  experienceContainer: {
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

export default EditExperiences;
