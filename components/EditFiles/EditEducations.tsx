import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {IUser} from '../interfaces';

type Props = {
  user: IUser | undefined;
  handleChange: React.Dispatch<React.SetStateAction<IUser | undefined>>;
};
function EditEducation({user, handleChange}: Props) {
  const updateStandard = (value: string, index: number) => {
    handleChange(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedEducations = [...prevUser.educations];
      updatedEducations[index].standard = value;
      return {...prevUser, educations: updatedEducations};
    });
  };
  const updateYear = (value: string, index: number) => {
    handleChange(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedEducations = [...prevUser.educations];
      updatedEducations[index].year = value;
      return {...prevUser, educations: updatedEducations};
    });
  };
  const updateMarks = (value: string, index: number) => {
    handleChange(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedEducations = [...prevUser.educations];
      updatedEducations[index].marks = value;
      return {...prevUser, educations: updatedEducations};
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Educations:</Text>
      {user?.educations.map((education, index) => (
        <View key={index} style={styles.educationContainer}>
          <Text style={styles.heading}>Standard:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => updateStandard(text, index)}
            value={education.standard}
            placeholder={education.standard}
          />
          <Text style={styles.heading}>Year:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => updateYear(text, index)}
            value={education.year}
            placeholder={education.year}
          />
          <Text style={styles.heading}>Marks:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => updateMarks(text, index)}
            value={education.marks}
            placeholder={education.marks}
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
  educationContainer: {
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

export default EditEducation;
