import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Help & Support</Text>
    <Text style={styles.text}>For assistance, contact us at help@yeslawyer.com or call (833) 517-1036.</Text>
    <Text style={styles.text}>Visit our FAQ for common questions.</Text>
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

export default HelpScreen;
