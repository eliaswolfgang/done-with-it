import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from '../components/Button';

export default function WelcomeScreen() {
  const handleLogin = () => console.log('login');
  const handleRegister = () => console.log('register');
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={{ fontSize: 30, fontWeight: 'bold', paddingVertical: 20 }}>
          Sell What You Don't Need
        </Text>
      </View>
      <View style={{ padding: 20, width: '100%' }}>
        <Button title={'login'} onPress={handleLogin} color='secondary' />
      </View>

      <View style={{ padding: 20, width: '100%' }}>
        <Button
          title={'register'}
          onPress={handleRegister}
          color='aquamarine'
          titleColor='gray'
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 140,
    alignItems: 'center',
  },
});
