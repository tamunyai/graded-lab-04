import { StyleSheet, View, Text } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

function NotificationsScreen() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Text style={{color: theme.text}}>notifications</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default NotificationsScreen;
