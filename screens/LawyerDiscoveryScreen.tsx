import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const categories = [
  'Family Law',
  'Employment Law',
  'Immigration Law',
  'Corporate Law',
  'Intellectual Property',
  'Personal Injury Law',
];

const lawyers = [
  {
    id: '1',
    name: 'Anna Schmidt',
    category: 'Family Law',
    experience: '10 years',
    rating: 4.8,
    location: 'Berlin, Germany',
  },
  {
    id: '2',
    name: 'John Müller',
    category: 'Employment Law',
    experience: '8 years',
    rating: 4.7,
    location: 'Munich, Germany',
  },
  {
    id: '3',
    name: 'Maria Weber',
    category: 'Immigration Law',
    experience: '12 years',
    rating: 4.9,
    location: 'Hamburg, Germany',
  },
  {
    id: '4',
    name: 'Peter Braun',
    category: 'Corporate Law',
    experience: '15 years',
    rating: 4.6,
    location: 'Frankfurt, Germany',
  },
  {
    id: '5',
    name: 'Sophie Keller',
    category: 'Intellectual Property',
    experience: '7 years',
    rating: 4.5,
    location: 'Stuttgart, Germany',
  },
  {
    id: '6',
    name: 'Max Fischer',
    category: 'Personal Injury Law',
    experience: '9 years',
    rating: 4.7,
    location: 'Düsseldorf, Germany',
  },
];

const LawyerDiscoveryScreen = ({ navigation }: any) => {
  const [search, setSearch] = useState('');

  const filteredCategories = categories.filter(category =>
    lawyers.some(lawyer =>
      lawyer.category === category &&
      (lawyer.name.toLowerCase().includes(search.toLowerCase()) ||
       lawyer.location.toLowerCase().includes(search.toLowerCase()) ||
       category.toLowerCase().includes(search.toLowerCase()))
    )
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lawyer Discovery</Text>
      <View style={styles.searchContainer}>
        <Icon name="magnify" size={24} color="#007AFF" style={{ marginRight: 8 }} />
        <View style={{ flex: 1 }}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by name, location, or category"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>
      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item}
        renderItem={({ item: category }) => (
          <View style={styles.categorySection}>
            <Text style={styles.category}>{category}</Text>
            {lawyers.filter(l => l.category === category &&
              (l.name.toLowerCase().includes(search.toLowerCase()) ||
               l.location.toLowerCase().includes(search.toLowerCase()) ||
               category.toLowerCase().includes(search.toLowerCase()))
            ).map(lawyer => (
              <View key={lawyer.id} style={styles.profileCard}>
                <Icon name="account" size={32} color="#007AFF" style={{ marginRight: 12 }} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{lawyer.name}</Text>
                  <Text style={styles.details}>{lawyer.experience} experience</Text>
                  <Text style={styles.details}>Rating: {lawyer.rating}</Text>
                  <Text style={styles.details}>Location: {lawyer.location}</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Consultation', { lawyer: lawyer })}>
                  <Text style={styles.buttonText}>Contact</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  categorySection: {
    marginBottom: 24,
  },
  category: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LawyerDiscoveryScreen;
