import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Colors, Dimensions, Spacing } from "../constants";
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from "react";

function SectionHeader({
    title,
    onPress,
    buttonTitle = 'Button',
}) {
    const { theme } = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
            {onPress && (
                <TouchableOpacity onPress={onPress}>
                    <Text style={[styles.buttonText, { color: theme.text }]}>{buttonTitle}</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Spacing.large,
        marginBottom: 10,
    },
    title: {
        fontSize: Dimensions.heading3FontSize,
        fontWeight: 'bold',
    },
    buttonText: {
        color: Colors.light.secondary,
    }
});

export default SectionHeader;