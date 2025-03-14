import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../../../themes';

interface ButtonProps {
    title: string;
    type?: 'primary' | 'disabled' | 'loading' | 'error' | 'success';
    onClick: () => void;
}

const PtButton: React.FC<ButtonProps> = ({title, type = 'primary', onClick}) => {
    return (
        <TouchableOpacity 
        style={[
            styles.button,
            type == 'primary' && styles.primary,
            type == 'disabled' && styles.disabled,
            type == 'error' && styles.error,
            type == 'success' && styles.success
        ]}
        onPress={onClick} disabled={type == 'disabled'}>
            {type == 'loading' 
                ? (
                    <View style={{backgroundColor: colors.black, padding: 16, borderRadius: 4}}>
                        <ActivityIndicator color={colors.white}/>
                    </View>
            )
                : (<Text style={styles.text}>{title}</Text>)
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      alignSelf:'center',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primary: {
      backgroundColor: colors.primary,
    },
    disabled: {
      backgroundColor: colors.disabled,
      opacity: 0.6,
    },
    error: {
      backgroundColor: colors.error,
    },
    success: {
      backgroundColor: colors.success,
    },
    text: {
      color: colors.white,
      fontSize: 16,
    },
  });

  export default PtButton;