import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const plans = [
  {
    name: 'Basic',
    price: '€9.99/mo',
    features: ['Case Evaluation', 'Chat Support'],
  },
  {
    name: 'Premium',
    price: '€19.99/mo',
    features: ['Everything in Basic', 'Same-Day Attorney Match', 'Priority Support'],
  },
  {
    name: 'Elite',
    price: '€49.99/mo',
    features: ['Everything in Premium', 'Custom Legal Plan', 'Direct Attorney Access'],
  },
];

const SubscriptionScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Plan</Text>
      {plans.map((plan, idx) => (
        <View key={idx} style={styles.planCard}>
          <Text style={styles.planName}>{plan.name}</Text>
          <Text style={styles.planPrice}>{plan.price}</Text>
          {plan.features.map((feature, fidx) => (
            <Text key={fidx} style={styles.feature}>• {feature}</Text>
          ))}
          <Button title="Subscribe" onPress={() => navigation.goBack()} />
        </View>
      ))}
      <Text style={styles.paywall}>Unlock premium legal services with a subscription!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 24,
  },
  planCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  planName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 8,
  },
  planPrice: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
  },
  feature: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  paywall: {
    fontSize: 16,
    color: '#007AFF',
    marginTop: 24,
    textAlign: 'center',
  },
});

export default SubscriptionScreen;
