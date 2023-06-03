import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

interface ButtonProps {
  title: string;
  titleColor?: keyof typeof colors;
  onPress: () => void;
  color?: keyof typeof colors;
}
export const Button: React.FC<ButtonProps> = ({
  title,
  titleColor = 'white',
  onPress,
  color = 'primary',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <View>
        <Text style={[styles.title, { color: colors[titleColor] }]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  title: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default Button;
