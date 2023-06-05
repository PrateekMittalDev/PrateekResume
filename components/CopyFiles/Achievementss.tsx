import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

type props = {
  title: string;
  year: number;
};

const Achievement = ({title, year}: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>{'\u2022'}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },

  bulletContainer: {
    marginTop: '5%',
  },

  detailsContainer: {
    marginTop: '-40%',
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

  companyTitle: {
    color: '#2d2f32',
    marginLeft: 5,
    marginBottom: 8,
  },

  year: {
    color: '#808081',
    marginLeft: 5,
  },
});

export default Achievement;
