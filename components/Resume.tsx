import React from 'react';
import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';
import Profile from './Profile';
import Introduction from './Introduction';
import Skills from './Skills';
import Experiences from './Experiences';
import Achievements from './Achievements';
import Educations from './Educations';

function Resume(props: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[{}]}
        style={styles.listContainer}
        renderItem={() => {
          return (
            <>
              <View>
                {/* <Pressable
                  onPress={async () => {
                    await AsyncStorage.removeItem('@User');
                  }}
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed ? 'pink' : 'yellow',
                    },
                    styles.editButton,
                  ]}>
                  <Text style={styles.buttonText}>DELETE</Text>
                </Pressable> */}

                <Profile />
                <Introduction />
                <Skills />
                <Educations />
                <Experiences />
                <Achievements />
                <Pressable
                  onPress={() => {
                    props.navigation.navigate('Edit');
                  }}
                  style={({pressed}) => [
                    {
                      backgroundColor: pressed ? 'black' : '#222222',
                    },
                    styles.editButton,
                  ]}>
                  <Text style={styles.buttonText}>EDIT</Text>
                </Pressable>
              </View>
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  editButton: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Resume;
