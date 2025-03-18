import React from 'react';
import type { ViewStyle } from 'react-native';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { colors } from '../../../themes';

export interface RadioButtonProps {
  selected: boolean;
  onSelect: () => void;
  label?: string;
  style?: ViewStyle;
}

const PtRadioButton: React.FC<RadioButtonProps> = ({ selected, onSelect, label, style }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={[styles.container, style]}>
      <View style={[styles.radio, selected && styles.selected]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  radio: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: colors.black,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    borderColor: colors.primary,
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  label: {
    fontSize: 16,
    color: colors.black,
  },
});

export default PtRadioButton;