import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LocationScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Our Location</Text>
    <Text style={styles.text}>800 Third Avenue FRNT A #1019, New York, NY 10022</Text>
    <Text style={styles.text}>We serve clients nationwide and online.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
});

export default LocationScreen;
