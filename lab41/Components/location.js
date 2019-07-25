import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Permissions from 'expo-permissions'


export default () => {
  const [location, setLocation] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState(initialState);
  const [hasPermission, setHasPermission] = useState(null);

};