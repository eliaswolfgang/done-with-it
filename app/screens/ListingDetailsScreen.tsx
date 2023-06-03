import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import Card from '../components/Card';

interface ListingDetailsScreenProps {}

const ListingDetailsScreen: React.FC<ListingDetailsScreenProps> = ({}) => {
  return (
    <View>
      <View style={styles.detailsContainer}>
        <Card
          title='Red jacket for sale'
          subTitle='$100'
          image={require('../assets/jacket.jpg')}
        />
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
