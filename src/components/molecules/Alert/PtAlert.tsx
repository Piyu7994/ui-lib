import React from 'react';
import { View, StyleSheet } from 'react-native';
import PtText from '../../atoms/Text/PtText';
import PtButton from '../../atoms/Button/PtButton';
import { colors } from '../../../themes';

export interface AlertProps {
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    onClose?: () => void; // Optional callback to close the alert
  }

const Alert: React.FC<AlertProps> = ({ message, type = 'info', onClose }) => {
  const backgroundColor = {
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
  }[type];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <PtText text={message} h3 h3Style={styles.text} />
      {onClose && <View style={{marginStart: 6}}/>}
      {onClose && <PtButton title="X" type="error" onClick={onClose} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.white,
  },
});

export default Alert;