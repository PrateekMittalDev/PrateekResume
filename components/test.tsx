import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const testComp = () => {
  return (
    <View style={styles.sone}>
      <Text>test</Text>
    </View>
  );
};

export default testComp;

const styles = StyleSheet.create({
  sone: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
