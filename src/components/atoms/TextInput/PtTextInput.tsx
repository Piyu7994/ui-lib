import React, { useState } from "react";
import { StyleSheet, Text, TextInput, type TextInputProps } from "react-native";
import { colors } from "../../../themes";

interface PtTextInputProps extends TextInputProps {
    placeholder: string,
    placeholderColor?: string,
    maxLines?: number,
    minLength?: number,
    onTextChange?: (text: string) => void,
    type?: 'outline' | 'filled',
    inputType?: 'text' | 'password' | 'multiline'
}

const PtTextInput: React.FC<PtTextInputProps> = ({
    placeholder, placeholderColor, 
    type = 'outline', inputType = 'text', 
    maxLines = 1,
    minLength = 6,
    onTextChange = () => {},
    ...rest
}) => {

    const [inputText, setInputText] = useState('')
    const [error, setError] = useState(false)
    const isPasswordType = inputType === 'password'

    const handleTextChange = (text: string) => {
        setInputText(text)
        console.log(inputText.length)
        isPasswordType && setError(inputText.length < minLength)
        onTextChange(text)
    }

    return (
        <>
            <TextInput 
                style={[
                    type === 'outline' && styles.outline,
                    type === 'filled' && styles.filled,
                    inputType === 'multiline' && {height: 100, textAlignVertical: 'top'},
                    isPasswordType && error && (type == 'filled' ? styles.errorFilled : styles.errorOutlined)
                ]}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                secureTextEntry={isPasswordType}
                multiline = {inputType === 'multiline'}
                numberOfLines={maxLines}
                onChangeText={handleTextChange}
                {...rest}
            />
            {isPasswordType && error && <Text style={styles.error}>Password must be atleast {minLength} characters!!!</Text>}
        </>
    )
}

const styles = StyleSheet.create({
    outline: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 4,
        padding: 8,
        fontSize: 14,
        color: colors.white
    },
    filled: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 4,
        padding: 8,
        fontSize: 14,
        backgroundColor: colors.backgroundColor,
        color: colors.white
    },
    errorFilled: {
        backgroundColor: colors.errorColor
    },
    errorOutlined: {
        borderColor: colors.errorColor
    },
    error: {
        color: colors.errorColor
    }
})

export default PtTextInput;