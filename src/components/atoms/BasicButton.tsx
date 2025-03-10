import type React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { ViewStyle } from 'react-native';

interface BasicButtonProps {
  text: string;
  styles: ViewStyle;
  onClick: () => void;
}

const BasicButton: React.FC<BasicButtonProps> = ({ text, styles, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default BasicButton;
