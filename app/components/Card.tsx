import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../config/colors';
import React from 'react';

interface CardProps {
  title: string;
  subTitle: string;
  image?: any;
}

export const Card: React.FC<CardProps> = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.subTitleText}>{subTitle}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: colors.softYellow,
    marginBottom: 20,
    padding: 10,
    overflow: 'hidden',
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'Avenir',
    fontStyle: 'italic',
    color: colors.black,
    padding: 10,
  },
  subTitleText: {
    fontSize: 20,
    color: colors.limegreen,
    paddingHorizontal: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
});
