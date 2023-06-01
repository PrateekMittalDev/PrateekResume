import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type props = {
  title: string;
  year: string;
};

function Achievement({title, year}: props): JSX.Element {
  return (
    <View style={styles.Education}>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>{'\u2022'}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Education: {
    width: '80%',
  },

  bulletContainer: {
    top: '22%',
  },

  detailsContainer: {
    top: '-28%',
    marginLeft: '27%',
  },

  bullet: {
    marginLeft: 15,
    fontSize: 27,
  },

  title: {
    color: '#000000',
    marginLeft: 5,
    marginBottom: 8,
  },

  year: {
    color: '#2d2f32',
    marginLeft: 5,
    marginBottom: 8,
  },

  marks: {
    color: '#808081',
    marginLeft: 5,
  },
});

export default Achievement;
