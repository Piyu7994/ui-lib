import React from 'react';
import type { ViewStyle } from 'react-native';
import { Switch as RNSwitch, StyleSheet, View, Text} from 'react-native';
import { colors } from '../../../themes';

export interface SwitchProps {
  value: boolean;
  onValueChange: () => void;
  label?: string;
  style?: ViewStyle;
}

const PtSwitch: React.FC<SwitchProps> = ({ value, onValueChange, label, style }) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNSwitch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: colors.disabled, true: colors.primary }}
        thumbColor={colors.white}
      />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 16,
    color: colors.black,
    marginRight: 8,
  },
});

export default PtSwitch;