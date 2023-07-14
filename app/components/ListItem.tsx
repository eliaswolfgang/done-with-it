import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import colors from '../config/colors';
import { Swipeable } from 'react-native-gesture-handler';

interface ListItemProps {
  image: any;
  title: string;
  subTitle: string;
  onPress?: () => void;
  renderRightActions?: () => React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.softYellow}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <Text style={styles.titleText}>{title}</Text>
            <Text>{subTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
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
