import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CreditCardDisplay from 'react-native-credit-card-display';

const AddPaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [cards, setCards] = useState<any[]>([]);

  const handleAddCard = () => {
    setCards([
      ...cards,
      {
        cardNumber,
        expiry,
        cvv,
        name,
      },
    ]);
    setCardNumber('');
    setExpiry('');
    setCvv('');
    setName('');
    Alert.alert('Visa card added!');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add Visa Card</Text>
      <View style={styles.inputRow}>
        <Icon name="credit-card" size={24} color="#007AFF" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon name="calendar" size={24} color="#007AFF" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Expiry (MM/YY)"
          value={expiry}
          onChangeText={setExpiry}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon name="lock" size={24} color="#007AFF" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          keyboardType="numeric"
          value={cvv}
          onChangeText={setCvv}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon name="account" size={24} color="#007AFF" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Name on Card"
          value={name}
          onChangeText={setName}
        />
      </View>
      <Button title="Add Card" onPress={handleAddCard} />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 24 }}>Your Cards</Text>
      {cards.map((card, idx) => (
        <CreditCardDisplay
          key={idx}
          number={card.cardNumber}
          expiration={card.expiry}
          cvc={card.cvv}
          name={card.name}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
});

export default AddPaymentScreen;
