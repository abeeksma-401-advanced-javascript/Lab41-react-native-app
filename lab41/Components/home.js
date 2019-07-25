import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
         <Text style={styles.paragraph}> Home </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center'
  }
});