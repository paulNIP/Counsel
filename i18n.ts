import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Counsel',
      login: 'Login',
      signup: 'Sign Up',
      email: 'Email',
      password: 'Password',
      home: 'Home',
      settings: 'Settings',
      caseEvaluation: 'Free Case Evaluation',
      consultation: 'Consultation',
      legalPlan: 'Custom Legal Plan',
      noFee: 'No-Fee Guarantee',
      language: 'Language',
      english: 'English',
      german: 'German',
      switchLanguage: 'Switch Language',
      // Add more keys as needed
    },
  },
  de: {
    translation: {
      welcome: 'Willkommen bei Counsel',
      login: 'Anmelden',
      signup: 'Registrieren',
      email: 'E-Mail',
      password: 'Passwort',
      home: 'Startseite',
      settings: 'Einstellungen',
      caseEvaluation: 'Kostenlose Fallbewertung',
      consultation: 'Beratung',
      legalPlan: 'Individueller Rechtsplan',
      noFee: 'Keine Gebühren Garantie',
      language: 'Sprache',
      english: 'Englisch',
      german: 'Deutsch',
      switchLanguage: 'Sprache wechseln',
      // Add more keys as needed
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
