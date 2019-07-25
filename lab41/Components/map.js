import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';

export default () => {

  let initialState = {
    latitude: -91.665623,
    longitude: 41.977880,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    }

  const [location, setLocation] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState(initialState);
  const [hasPermission, setHasPermission] = useState(null);


  return (
    <MapView 
    style={{flex: 1}}     
    region={location}
    />

  )
}
