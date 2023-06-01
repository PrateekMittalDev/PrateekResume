import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

type props = {
  name: string;
  link: string;
};

function Skill({name, link}: props): JSX.Element {
  return (
    <View style={styles.skill}>
      <Image style={styles.logo} source={{uri: link}} />
      <Text style={styles.skillName}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  skill: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 95,
    height: 95,
    margin: 5,
    borderRadius: 10,
  },

  logo: {
    height: 40,
    width: 40,
    marginBottom: 10,
  },

  skillName: {
    fontSize: 12,
    color: 'black',
  },
});

export default Skill;
