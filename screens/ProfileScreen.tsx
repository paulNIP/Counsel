import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Switch, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../ThemeContext';
import { useNavigation } from '@react-navigation/native';

const sampleProfile = {
  name: 'Anna Schmidt',
  email: 'anna.schmidt@example.com',
  location: 'Berlin, Germany',
  category: 'Family Law',
  experience: '10 years',
  rating: 4.8,
};

const ProfileScreen = () => {
  const { theme, setTheme } = useTheme();
  const darkTheme = theme === 'dark';
  const themeStyles = darkTheme ? darkStyles : styles;
  const navigation = useNavigation();

  return (
    <View style={themeStyles.container}>
      <View style={themeStyles.profileHeader}>
        <Icon name="account" size={64} color="#007AFF" />
        <Text style={themeStyles.name}>{sampleProfile.name}</Text>
        <Text style={themeStyles.details}>{sampleProfile.email}</Text>
        <Text style={themeStyles.details}>{sampleProfile.location}</Text>
        <Text style={themeStyles.details}>{sampleProfile.category}</Text>
        <Text style={themeStyles.details}>{sampleProfile.experience} experience</Text>
        <Text style={themeStyles.details}>Rating: {sampleProfile.rating}</Text>
      </View>
      <View style={themeStyles.menuSection}>
        <Text style={themeStyles.menuTitle}>Settings</Text>
        <View style={themeStyles.menuItem}>
          <Text style={themeStyles.menuLabel}>Dark Theme</Text>
          <Switch value={darkTheme} onValueChange={v => setTheme(v ? 'dark' : 'light')} />
        </View>
        <View style={themeStyles.menuItem}>
          <Text style={themeStyles.menuLabel}>Add Payment</Text>
          <Button title="Add Visa Card" onPress={() => navigation.navigate('AddPayment')} />
        </View>
        <View style={themeStyles.menuItem}>
          <Text style={themeStyles.menuLabel}>Subscription Plans</Text>
          <Button title="View Plans" onPress={() => navigation.navigate('Subscription')} />
        </View>
        <View style={themeStyles.menuItem}>
          <Text style={themeStyles.menuLabel}>Help</Text>
          <Button title="Help" onPress={() => navigation.navigate('Help')} />
        </View>
        <View style={themeStyles.menuItem}>
          <Text style={themeStyles.menuLabel}>About Us</Text>
          <Button title="About Us" onPress={() => navigation.navigate('AboutUs')} />
        </View>
        <View style={themeStyles.menuItem}>
          <Text style={themeStyles.menuLabel}>Location</Text>
          <Button title="Location" onPress={() => navigation.navigate('Location')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 8,
  },
  details: {
    fontSize: 16,
    color: '#555',
    marginTop: 2,
  },
  menuSection: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 24,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: '#007AFF',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  menuLabel: {
    fontSize: 16,
    color: '#333',
  },
  backBtn: {
    alignSelf: 'flex-start',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
  },
  backText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  details: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 2,
  },
  menuSection: {
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingTop: 24,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  menuLabel: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ProfileScreen;
