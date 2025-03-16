import React from "react";
import { StyleSheet, Text, type TextStyle } from "react-native";
import { colors } from "../../../themes";

export interface TextProps {
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

    let textStyle: TextStyle[] = [];
    if (h1) {
        textStyle = [styles.h1, h1Style]
    } else if (h2) {
        textStyle = [styles.h2, h2Style]
    } else if (h3) {
        textStyle = [styles.h3, h3Style]
    }

    return (
        <Text style={[
            styles.default, defaultStyle,
            ...textStyle
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