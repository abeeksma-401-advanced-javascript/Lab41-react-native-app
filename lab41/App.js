import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Asset, Constants, FileSystem, Permission} from 'react-native-unnimodules';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lab41: more React stuff....yay....</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
