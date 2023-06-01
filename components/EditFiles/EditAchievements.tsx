import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {IUser} from '../interfaces';

type Props = {
  user: IUser | undefined;
  handleChange: React.Dispatch<React.SetStateAction<IUser | undefined>>;
};
function EditAchievements({user, handleChange}: Props) {
  const updateTitle = (value: string, index: number) => {
    handleChange(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedAchievements = [...prevUser.achievements];
      updatedAchievements[index].title = value;
      return {...prevUser, achievements: updatedAchievements};
    });
  };
  const updateYear = (value: string, index: number) => {
    handleChange(prevUser => {
      if (!prevUser) {
        return prevUser;
      }
      const updatedAchievements = [...prevUser.achievements];
      updatedAchievements[index].year = value;
      return {...prevUser, achievements: updatedAchievements};
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Achievements:</Text>
      {user?.achievements.map((achievement, index) => (
        <View key={index} style={styles.achievementContainer}>
          <Text style={styles.heading}>Title:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => updateTitle(text, index)}
            value={achievement.title}
            placeholder={achievement.title}
          />
          <Text style={styles.heading}>Year:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => updateYear(text, index)}
            value={achievement.year}
            placeholder={achievement.year}
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
  achievementContainer: {
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

export default EditAchievements;
