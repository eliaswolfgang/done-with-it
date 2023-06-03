import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

interface ListingDetailsScreenProps {
  image: any;
}

const ListingDetailsScreen: React.FC<ListingDetailsScreenProps> = ({
  image,
}) => {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleText}>Red jacket for sale</Text>
        <Text style={styles.subTitleText}>$100</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title='Mosh Hamedani'
            subTitle='5 Listings'
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
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
  userContainer: {
    marginVertical: 40,
  },
});
