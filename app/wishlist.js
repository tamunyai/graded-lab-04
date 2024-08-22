import { StyleSheet, View, Text } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

function WishListScreen() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Text style={{color: theme.text}}>WishList</Text>
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

export default WishListScreen;
