import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Dimensions, Spacing } from '../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from "react";

function MainHeader({ title, onPress, icon = '' }) {
    const insets = useSafeAreaInsets();
    const { theme } = useContext(ThemeContext);

    return (
        <View style={[styles.container, { marginTop: insets.top }]}>
            <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
            {icon && (
                <TouchableOpacity onPress={onPress}>
                    <FontAwesome size={Dimensions.iconSize} name={icon} color={theme.icon} />
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
        paddingHorizontal: Spacing.large,
        marginTop: Spacing.extraLarge,
    },
    title: {
        fontSize: Dimensions.titleFontSize,
        fontWeight: 'bold',
    }
});

export default MainHeader;