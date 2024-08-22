import { Link, router } from "expo-router";
import { View, Button, StyleSheet } from "react-native";

function HomeScreen() {
    return (
        <View style={styles.container}>
                <Button title="Welcome" onPress={() => {
                    router.push('/menu');
                }} />
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