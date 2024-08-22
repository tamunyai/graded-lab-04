import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

function HomeScreen() {
    return (
        <View style={styles.container}> 
            <Link href='/menu'>Go to Menu</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeScreen;