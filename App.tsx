import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { View, StyleSheet } from 'react-native';
import Button from './app/components/Button';
import Card from './app/components/Card';
import colors from './app/config/colors';
import ListItem from './app/components/ListItem';

export default function App() {
  const handlePress = () => console.log('Text pressed');
  return (
    <View style={styles.app}>
      {/* <View style={styles.container}>
        <WelcomeScreen />
      </View> */}
      {/* <View style={{ backgroundColor: colors.black }}> */}
      {/* <Card
          title='Red jacket for sale'
          subTitle='$100'
          image={require('./app/assets/jacket.jpg')}
        /> */}
      {/* </View> */}
      {/* <ListItem
        image={require('./app/assets/mosh.jpg')}
        title='Mosh Hamedani'
        subTitle='5 Listings'
      /> */}
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
