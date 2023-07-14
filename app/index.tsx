import React from 'react';
import WelcomeScreen from './welcome';
import { View, StyleSheet } from 'react-native';
import colors from './config/colors';

export default function App() {
  const handlePress = () => console.log('Text pressed');
  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <WelcomeScreen />
      </View>
      {/* <View style={{ backgroundColor: colors.black }}>
        <ListingDetailsScreen />
      </View>
      <ViewImageScreen /> */}
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
