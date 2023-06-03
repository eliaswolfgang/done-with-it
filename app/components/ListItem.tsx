import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import colors from '../config/colors';

interface ListItemProps {
  image: any;
  title: string;
  subTitle: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, title, subTitle }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'Avenir',
    fontWeight: '500',
  },
  subTitleText: {
    fontSize: 18,
    color: colors.lightGray,
  },
});
