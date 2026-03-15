import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    // Simulate loading, then navigate to Onboarding
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.text}>Welcome to Counsel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default SplashScreen;
