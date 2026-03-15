import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const contacts = [
  { id: '1', name: 'Rako', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', lastMessage: 'Hello, how can I help?', time: '09:30' },
  { id: '2', name: 'Surendra', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', lastMessage: 'Let me know your issue.', time: '08:15' },
  { id: '3', name: 'Anna', avatar: 'https://randomuser.me/api/portraits/women/3.jpg', lastMessage: 'I am available for consultation.', time: 'Yesterday' },
];

const ChatScreen = ({ navigation }: any) => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.contactCard} onPress={() => navigation.navigate('ChatDetails', { contact: item })}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.time}>{item.time}</Text>
        <Icon name="chevron-right" size={24} color="#A0A0A0" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chats</Text>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222',
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  lastMessage: {
    fontSize: 14,
    color: '#888',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
});

export default ChatScreen;
