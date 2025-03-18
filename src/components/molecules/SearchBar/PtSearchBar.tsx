import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PtTextInput from '../../atoms/TextInput/PtTextInput';
import PtButton from '../../atoms/Button/PtButton';

export interface SearchBarProps {
    placeholder: string;
    onSearch: (query: string) => void; // Callback when search is triggered
    onClear?: () => void; // Optional callback to clear the input
  }

const PtSearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch, onClear }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onClear?.();
  };

  return (
    <View style={styles.container}>
      <PtTextInput
        placeholder={placeholder}
        value={query}
        onTextChange={setQuery}
        type="outline"
        inputType="text"
        style={styles.input}
      />
      <PtButton title="Search" type="primary" onClick={handleSearch} />
      {query && <PtButton title="Clear" type="error" onClick={handleClear} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
  },
});

export default PtSearchBar;