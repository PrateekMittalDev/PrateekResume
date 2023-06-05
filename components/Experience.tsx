import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type props = {
  role: string;
  companyName: string;
  timePeriod: string;
};

function Experience({role, companyName, timePeriod}: props): JSX.Element {
  return (
    <View style={styles.Experience}>
      <View style={styles.bulletContainer}>
        <Text style={styles.bullet}>{`\u2022`}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.role}>{role}</Text>
        <Text style={styles.companyName}>{companyName}</Text>
        <Text style={styles.timePeriod}>{timePeriod}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Experience: {
    width: '80%',
  },

  bulletContainer: {
    top: '24%',
  },

  detailsContainer: {
    top: '-24%',
    marginLeft: '27%',
  },

  bullet: {
    marginLeft: 15,
    fontSize: 27,
  },

  role: {
    color: '#000000',
    marginLeft: 5,
    marginBottom: 8,
  },

  companyName: {
    color: '#2d2f32',
    marginLeft: 5,
    marginBottom: 8,
  },

  timePeriod: {
    color: '#808081',
    marginLeft: 5,
  },
});

export default Experience;
