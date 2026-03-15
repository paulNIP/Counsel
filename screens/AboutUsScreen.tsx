import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { useTranslation } from 'react-i18next';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

const faqData = [
  {
    key: 'can_get_help_today',
    question: 'Can I get legal help today?',
    answer: 'Yes, you can connect with a lawyer and get legal help today through our platform.',
  },
  {
    key: 'legally_binding',
    question: 'Is the online consultation legally binding?',
    answer: 'Online consultations provide legal advice, but are not legally binding unless formalized.',
  },
  {
    key: 'areas_covered',
    question: 'What areas of law are covered?',
    answer: 'We cover a wide range of legal areas including family, criminal, tax, labor, and more.',
  },
  {
    key: 'free_consultation',
    question: 'Is this a free consultation?',
    answer: 'Yes, initial consultations are free for most lawyers on our platform.',
  },
];

const AboutUsScreen = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleExpand = (key: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(expanded === key ? null : key);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('About Us')}</Text>
      <Text style={styles.text}>{t('YesLawyer connects you with experienced lawyers for fast, affordable legal help. Our mission is to make legal advice accessible and stress-free.')}</Text>
      <Text style={styles.text}>{t('Location: 800 Third Avenue FRNT A #1019, New York, NY 10022')}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('Questions?')}</Text>
        {faqData.map(item => (
          <View key={item.key} style={styles.faqItem}>
            <TouchableOpacity onPress={() => handleExpand(item.key)} style={styles.faqHeader}>
              <Text style={styles.faqQuestion}>{t(item.question)}</Text>
              <Text style={styles.expandIcon}>{expanded === item.key ? '-' : '+'}</Text>
            </TouchableOpacity>
            {expanded === item.key && (
              <View style={styles.faqAnswerBox}>
                <Text style={styles.faqAnswer}>{t(item.answer)}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  faqItem: {
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  expandIcon: {
    fontSize: 22,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  faqAnswerBox: {
    marginTop: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#444',
  },
});

export default AboutUsScreen;
