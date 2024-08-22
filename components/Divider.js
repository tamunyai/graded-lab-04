import { View } from "react-native";
import { Spacing } from "../constants";
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from "react";

function Divider({ style, enabledSpacing = true }) {
    const { theme } = useContext(ThemeContext);

    return (
        <View style={[{
            height: 1,
            backgroundColor: theme.background,
            marginTop: enabledSpacing ? Spacing.large : 0,
            marginBottom: enabledSpacing ? Spacing.small : 0,
        }, style]}></View>
    );
}

export default Divider;
