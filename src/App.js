import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { t } from './i18n';

const App = () => {
  const name = 'John';
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{`${t('Welcome to i18n')}, ${name}!`}</Text>
        <Text style={styles.message}>{t('This is a message to describe!')}</Text>
        <Text style={styles.message}>{t('test.message')}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
  },
  message: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '500',
    color: '#FFF',
  },
});

export default App;
