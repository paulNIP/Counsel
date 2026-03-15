import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';

const categories = [
  { name: 'Divorce lawyers', icon: 'account-group' },
  { name: 'Family lawyers', icon: 'account-child' },
  { name: 'Criminal lawyers', icon: 'gavel' },
  { name: 'Tax lawyers', icon: 'calculator' },
  { name: 'Labor lawyers', icon: 'briefcase' },
];

const freeConsultationLawyers = [
  {
    name: 'Rako',
    rating: 4.7,
    categories: ['Family lawyer', 'Tax lawyer'],
    price: 'Free',
    icon: 'account',
  },
  {
    name: 'Surendra',
    rating: 4.8,
    categories: ['Criminal lawyer'],
    price: 'Free',
    icon: 'account',
  },
];

const HomeScreen = ({ navigation }: any) => {
  const { t, i18n } = useTranslation();

  return (
    <ScrollView style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchBar}>
        <Icon name="magnify" size={24} color="#A0A0A0" style={{ marginRight: 8 }} />
        <TextInput
          style={styles.searchInput}
          placeholder={t('Search for lawyers')}
        />
        <Icon name="tune" size={24} color="#A0A0A0" />
      </View>

      {/* Free consultation section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{t('Free consultation')}</Text>
        <TouchableOpacity><Text style={styles.link}>{t('View all')}</Text></TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.lawyerScroll}>
        {freeConsultationLawyers.map((lawyer, idx) => (
          <View key={idx} style={styles.lawyerCard}>
            <Icon name={lawyer.icon} size={40} color="#007AFF" style={{ marginBottom: 8 }} />
            <Text style={styles.lawyerName}>{lawyer.name}</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.rating}>{lawyer.rating}</Text>
              <Icon name="star" size={16} color="#FFD700" />
            </View>
            <Text style={styles.lawyerCategory}>{lawyer.categories.join(', ')}</Text>
            <Text style={styles.lawyerPrice}>{lawyer.price}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Categories section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{t('Categories')}</Text>
        <TouchableOpacity><Text style={styles.link}>{t('View all')}</Text></TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map((cat, idx) => (
          <TouchableOpacity key={idx} style={styles.categoryCard}>
            <Icon name={cat.icon} size={28} color="#007AFF" style={{ marginBottom: 4 }} />
            <Text style={styles.categoryName}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.allLawyersButton}><Text style={styles.allLawyersText}>{t('All lawyers')}</Text></TouchableOpacity>

      {/* Chat with experts section */}
      <View style={styles.chatSection}>
        <Text style={styles.chatTitle}>{t('Chat with experts')}</Text>
        <View style={styles.chatList}>
          <Text style={styles.chatItem}>• {t('Access to Expertise')}</Text>
          <Text style={styles.chatItem}>• {t('Convenient')}</Text>
          <Text style={styles.chatItem}>• {t('Time-Saving')}</Text>
          <Text style={styles.chatItem}>• {t('Confidential')}</Text>
          <Text style={styles.chatItem}>• {t('Free of cost')}</Text>
        </View>
        <TouchableOpacity style={styles.chatButton}><Text style={styles.chatButtonText}>{t('Chat now')}</Text></TouchableOpacity>
      </View>

      {/* Steps to book an appointment */}
      <Text style={styles.stepsTitle}>{t('Steps to book an appointment')}</Text>
      <View style={styles.stepsRow}>
        <View style={styles.stepIcon}><Icon name="home" size={28} color="#007AFF" /></View>
        <View style={styles.stepIcon}><Icon name="account-search" size={28} color="#007AFF" /></View>
        <View style={styles.stepIcon}><Icon name="bell" size={28} color="#007AFF" /></View>
        <View style={styles.stepIcon}><Icon name="magnify" size={28} color="#007AFF" /></View>
        <View style={styles.stepIcon}><Icon name="cog" size={28} color="#007AFF" /></View>
      </View>
      <View style={styles.stepsGrid}>
        <View style={styles.stepCard}><Text style={styles.stepCardTitle}>{t('Search for lawyer in required area of practice.')}</Text></View>
        <View style={styles.stepCard}><Text style={styles.stepCardTitle}>{t('Know more about the lawyer.')}</Text></View>
        <View style={styles.stepCard}><Text style={styles.stepCardTitle}>{t('Select date & time')}</Text><Text style={styles.stepCardDesc}>{t('Select the date and time to reserve a spot for consultation.')}</Text></View>
        <View style={styles.stepCard}><Text style={styles.stepCardTitle}>{t('Payment')}</Text><Text style={styles.stepCardDesc}>{t('The payment mode of user is safe and secure.')}</Text></View>
      </View>
      <TouchableOpacity style={styles.allLawyersButton}><Text style={styles.allLawyersText}>{t('All lawyers')}</Text></TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 8,
    borderColor: '#eee',
    borderWidth: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  link: {
    color: '#007AFF',
    fontSize: 14,
  },
  lawyerScroll: {
    marginVertical: 8,
  },
  lawyerCard: {
    width: 140,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  lawyerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  rating: {
    fontSize: 14,
    color: '#222',
    marginRight: 2,
  },
  lawyerCategory: {
    fontSize: 12,
    color: '#888',
    marginBottom: 2,
  },
  lawyerPrice: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  categoryScroll: {
    marginVertical: 8,
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    minWidth: 110,
  },
  categoryName: {
    fontSize: 14,
    color: '#222',
    fontWeight: 'bold',
  },
  allLawyersButton: {
    backgroundColor: '#BFD7ED',
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 16,
  },
  allLawyersText: {
    color: '#222',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatSection: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 16,
    marginVertical: 16,
    alignItems: 'center',
  },
  chatTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  chatList: {
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  chatItem: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 2,
  },
  chatButton: {
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginTop: 8,
  },
  chatButtonText: {
    color: '#1E293B',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginVertical: 8,
  },
  stepsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  stepIcon: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  stepsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  stepCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    width: '48%',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  stepCardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  stepCardDesc: {
    fontSize: 12,
    color: '#888',
  },
});

export default HomeScreen;
