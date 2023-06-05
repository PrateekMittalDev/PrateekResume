import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUser} from '../interfaces';
import EditProfile from './EditProfile';
import EditIntroduction from './EditIntroduction';
import EditEducations from './EditEducations';
import EditExperiences from './EditExperiences';
import EditAchievements from './EditAchievements';
import EditSkills from './EditSkills';

function EditResume(props: any) {
  const [formData, setFormData] = useState<IUser>();
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@User');
      if (jsonValue != null) {
        const value = JSON.parse(jsonValue);
        setFormData(value);
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      {/* <View style={styles.container}> */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <EditProfile user={formData} handleChange={setFormData} />
        <EditIntroduction user={formData} handleChange={setFormData} />
        <EditSkills user={formData} handleChange={setFormData} />
        <EditEducations user={formData} handleChange={setFormData} />
        <EditExperiences user={formData} handleChange={setFormData} />
        <EditAchievements user={formData} handleChange={setFormData} />
      </ScrollView>
      <Pressable
        onPress={async () => {
          await AsyncStorage.setItem('@User', JSON.stringify(formData));
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Resume'}],
          });
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'pink' : '#deeaf1',
          },
          styles.editButton,
        ]}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
      {/* </View> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  editButton: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  buttonText: {
    color: 'black',
  },
});

export default EditResume;
