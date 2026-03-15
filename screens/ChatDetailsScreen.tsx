import React, { useState, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { GiftedChat, InputToolbar, Actions, IMessage, User } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatDetailsScreen = ({ route }: any) => {
  const { contact } = route.params;
  const [messages, setMessages] = useState<IMessage[]>([]);

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello! How can I help you?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: contact.name as string,
          avatar: contact.avatar as string,
        } as User,
      },
    ]);
  }, [contact]);

  const onSend = useCallback((msgs: IMessage[] = []) => {
    setMessages(prev => GiftedChat.append(prev, msgs));
  }, []);

  // Custom actions for location, audio, video, files
  const renderActions = (props: any) => (
    <View style={styles.actionsRow}>
      <TouchableOpacity style={styles.actionBtn}><Icon name="map-marker" size={24} color="#007AFF" /></TouchableOpacity>
      <TouchableOpacity style={styles.actionBtn}><Icon name="microphone" size={24} color="#007AFF" /></TouchableOpacity>
      <TouchableOpacity style={styles.actionBtn}><Icon name="video" size={24} color="#007AFF" /></TouchableOpacity>
      <TouchableOpacity style={styles.actionBtn}><Icon name="file" size={24} color="#007AFF" /></TouchableOpacity>
      <Actions {...props} /></View>
  );

  // Top actions for audio/video call
  const renderHeader = () => (
    <View style={styles.headerRow}>
      <Text style={styles.headerName}>{contact.name}</Text>
      <View style={styles.headerActions}>
        <TouchableOpacity style={styles.headerBtn}><Icon name="phone" size={24} color="#007AFF" /></TouchableOpacity>
        <TouchableOpacity style={styles.headerBtn}><Icon name="video" size={24} color="#007AFF" /></TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      <GiftedChat
        messages={messages}
        onSend={(msgs: IMessage[]) => onSend(msgs)}
        user={{ _id: 1, name: 'You' } as User}
        renderInputToolbar={(props: any) => <InputToolbar {...props} />}
        renderActions={renderActions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  headerActions: {
    flexDirection: 'row',
  },
  headerBtn: {
    marginLeft: 12,
    backgroundColor: '#BFD7ED',
    borderRadius: 24,
    padding: 8,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  actionBtn: {
    marginRight: 8,
    backgroundColor: '#F8FAFC',
    borderRadius: 24,
    padding: 8,
  },
});

export default ChatDetailsScreen;
