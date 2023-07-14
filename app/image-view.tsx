import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const ViewImageScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color='white' size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          color='white'
          size={35}
        />
      </View>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require('./assets/chair.jpg')}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  closeIcon: {
    position: 'absolute',
    top: 50,
    left: 40,
  },
  deleteIcon: {
    position: 'absolute',
    top: 50,
    right: 40,
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    marginTop: 20,
  },
});
