import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    Text
} from "react-native";
import { Dimensions, Spacing } from "../constants";
import ButtonIcon from "./ButtonIcon";
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ThemeContext } from '../contexts/ThemeContext';

const CARD_WIDTH = Dimensions.width / 2 - (Spacing.large + Spacing.large / 2);
const CARD_HEIGHT = 220;

function FoodItemsList({ list }) {
    const { addToCart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);

    return (
        <View style={styles.container}>
            {list.map((foodItem) => {
                return (
                    <TouchableOpacity
                        key={foodItem.id}
                        style={styles.cardContainer}
                        onPress={() => { }}
                    >
                        <View style={[styles.card, { borderColor: theme.text }]}>
                            <View style={styles.cardImage}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: foodItem.image }}
                                />
                            </View>
                            <View style={styles.footer}>
                                <View style={styles.cardText}>
                                    <Text style={[styles.name, { color: theme.text }]}>{foodItem.name}</Text>
                                    <Text style={[styles.description, { color: theme.text }]}>{foodItem.description}</Text>
                                    <Text style={[styles.price, { color: theme.text }]}>ZAR {foodItem.price.toFixed(2)}</Text>
                                </View>
                                <ButtonIcon
                                    style={{ alignSelf: 'flex-start' }}
                                    icon="plus-circle"
                                    onPress={() => addToCart(foodItem)}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cardContainer: {
        marginLeft: Spacing.small,
        marginBottom: Spacing.large,
    },
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderWidth: Dimensions.borderWidth,
        overflow: 'hidden',
    },
    cardImage: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 40,
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 100,
        resizeMode: 'cover',
    },
    cardText: {
        flex: 1,
    },
    footer: {
        marginTop: -50,
        marginLeft: 16,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        marginVertical: 4,
        fontSize: Dimensions.bodyFontSize,
        fontWeight: 'bold',
        // color: 'white',  
    },
    price: {
        fontSize: Dimensions.bodyFontSize,
        // color: ,
    },
    description: {
        fontSize: Dimensions.captionFontSize,
        marginBottom: 4,
    },
})

export default FoodItemsList;
