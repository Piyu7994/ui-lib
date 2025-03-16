import React from 'react';
import { StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../themes';

export interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

const PtIcon: React.FC<IconProps> = ({ name, size = 24, color = colors.black }) => {
  return (
    <MaterialIcons
      name={name}
      size={size}
      color={color}
      style={styles.icon}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
  },
});

export default PtIcon;