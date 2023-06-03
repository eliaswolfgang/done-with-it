import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { View, StyleSheet } from 'react-native';
import Button from './app/components/Button';
import Card from './app/components/Card';
import colors from './app/config/colors';
import ListItem from './app/components/ListItem';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  const handlePress = () => console.log('Text pressed');
  return (
    <View style={styles.app}>
      {/* <View style={styles.container}>
        <WelcomeScreen />
      </View>
      <View style={{ backgroundColor: colors.black }}>
        <ListingDetailsScreen />
      </View> */}
      <ViewImageScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.black,
    overflowY: 'scroll',
  },
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
