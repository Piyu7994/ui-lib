import React from "react";
import { StyleSheet, Text, type TextStyle } from "react-native";
import { colors } from "../../../themes";

interface TextProps {
    text: string,
    defaultStyle?: TextStyle,
    h1?: boolean,
    h1Style?: TextStyle,
    h2?: boolean,
    h2Style?: TextStyle,
    h3?: boolean,
    h3Style?: TextStyle
}

const PtText: React.FC<TextProps> = ({
    text, h1 = false, h2 = false, h3 = false,
    h1Style = {}, h2Style = {}, h3Style = {}, defaultStyle = {}
}) => {
    return (
        <Text style={[
            styles.default, defaultStyle,
            h1 && [styles.h1, h1Style],
            h2 && [styles.h2, h2Style],
            h3 && [styles.h3, h3Style]
        ]}>
            {text}
        </Text>
    )
}

const styles = StyleSheet.create({
    default: { fontSize: 12, color: colors.black, alignSelf: 'flex-start' },
    h3: { fontSize: 18, alignSelf: 'flex-start' },
    h2: { fontSize: 24, alignSelf: 'flex-start' },
    h1: { fontSize: 30, alignSelf: 'flex-start' }
})

export default PtText;