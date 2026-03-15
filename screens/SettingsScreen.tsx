import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('settings')}</Text>
      <Text style={{ fontSize: 18, marginBottom: 16 }}>{t('language')}</Text>
      <Button title={t('english')} onPress={() => i18n.changeLanguage('en')} />
      <Button title={t('german')} onPress={() => i18n.changeLanguage('de')} />
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
    fontSize: 24,
    color: '#007AFF',
  },
});

export default SettingsScreen;
