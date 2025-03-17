import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PtButton from '../../atoms/Button/PtButton';
import PtText from '../../atoms/Text/PtText';
import { colors } from '../../../themes';

export interface DropdownProps {
    options: string[];
    onSelect: (option: string) => void;
    placeholder?: string;
  }

const PtDropdown: React.FC<DropdownProps> = ({ options, onSelect, placeholder = 'Select an option' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      {/* Dropdown Trigger */}
      <PtButton
        title={isOpen ? 'Close' : 'Open'} // Button to toggle dropdown
        type="primary"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Selected Option or Placeholder */}
      <View style={styles.selectedOptionContainer}>
        <PtText
          text={selectedOption || placeholder}
          h3
          h3Style={styles.selectedOptionText}
        />
      </View>

      {/* Dropdown Options */}
      {isOpen && (
        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => handleSelect(option)}
              style={styles.option}
            >
              <PtText text={option} h3 h3Style={styles.optionText} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  selectedOptionContainer: {
    marginTop: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 4,
  },
  selectedOptionText: {
    color: colors.black,
  },
  optionsContainer: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    marginTop: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 4,
  },
  option: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  optionText: {
    color: colors.black,
  },
});

export default PtDropdown;