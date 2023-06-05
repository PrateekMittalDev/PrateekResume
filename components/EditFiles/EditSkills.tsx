import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {IUser} from '../interfaces';
import {launchImageLibrary} from 'react-native-image-picker';

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
      const updatedSkill = {...prevUser.skills[index], source: value}; // New line added
      // updatedSkills[index].source = value;
      updatedSkills[index] = updatedSkill;
      return {...prevUser, skills: updatedSkills};
    });
  };

  function imagePicker(index: number) {
    const options = {
      mediaType: 'photo' as const,
      maxWidth: 500,
      maxHeight: 500,
      includedBase64: true,
    };

    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User Cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error:', response.errorMessage);
      } else {
        const {assets} = response;
        const uri = assets && assets.length > 0 ? assets[0].uri : '';
        updateSource(uri || '', index);
      }
    });
  }

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
          <Pressable
            onPress={() => {
              imagePicker(index);
            }}
            style={styles.addImageBtn}>
            <Text style={styles.buttonText}>Pick an Image</Text>
          </Pressable>
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
  addImageBtn: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#332f2f',
    width: '80%',
    marginTop: 20,
    marginLeft: '10%',
  },
  buttonText: {
    color: 'white',
  },
});

export default EditSkills;
