import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { colors } from '../../../themes';
import type { ViewStyle } from 'react-native';

export interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  label?: string;
  style?: ViewStyle;
}

const PtCheckbox: React.FC<CheckboxProps> = ({ checked, onToggle, label, style }) => {
  return (
    <TouchableOpacity onPress={onToggle} style={[styles.container, style]}>
      <View style={[styles.checkbox, checked && styles.checked]} />
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: colors.black,
    borderRadius: 4,
  },
  checked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  label: {
    fontSize: 16,
    color: colors.black,
  },
});

export default PtCheckbox;