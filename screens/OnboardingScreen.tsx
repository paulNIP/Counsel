import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const OnboardingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started with Counsel</Text>
      <Text style={styles.subtitle}>Your journey begins here!</Text>
      <Button title="Continue" onPress={() => navigation.replace('Main')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 32,
  },
});

export default OnboardingScreen;
