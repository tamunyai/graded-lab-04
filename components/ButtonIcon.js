import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Dimensions } from "../constants";
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from "react";

function ButtonIcon({ style, onPress, icon }) {
    const { theme } = useContext(ThemeContext);

    return (
        <TouchableOpacity style={[styles.button, style]}>
            <FontAwesome size={Dimensions.iconSize} name={icon} color={theme.icon} onPress={onPress} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 4,
        borderRadius: 20,
    }
});

export default ButtonIcon;
