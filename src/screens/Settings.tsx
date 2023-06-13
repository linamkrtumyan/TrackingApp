import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

const Settings = () => {
  const {t, i18n} = useTranslation();

  const languages = [
    // Language List
    {code: 'en', label: t('english')},
    {code: 'ru', label: t('russian')},
  ];

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ScrollView style={styles.sectionContainer}>
      {languages.map(currentLanguage => (
        <Text
          style={[
            styles.sectionTitle,
            currentLanguage.code === i18n.language && styles.active,
          ]}
          key={currentLanguage.code}
          onPress={toggle}>
          {currentLanguage.label}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    padding: 10,
    borderRadius: 15,
    marginVertical: 2,
  },
  active: {
    backgroundColor: '#a7d9f4',
  },
});

export default Settings;
