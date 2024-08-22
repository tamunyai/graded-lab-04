import {
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from "react-native";
import { Dimensions, Spacing } from "../constants";
import ButtonIcon from "./ButtonIcon";
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const CARD_WIDTH = Dimensions.width - 100;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + Spacing.large;

function FoodItemsCarousel({ list }) {
    const { addToCart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);

    return (
        <FlatList
            data={list}
            horizontal
            snapToInterval={CARD_WIDTH_SPACING}
            decelerationRate='fast'
            showsHorizontalScrollIndicator={false}
            keyExtractor={(index) => index.id}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity
                        style={{
                            marginLeft: Spacing.small,
                            marginRight: index === list.length - 1 ? Spacing.large : 0,
                        }}
                        onPress={() => { }}
                    >
                        <View style={styles.card}>
                            <ButtonIcon style={styles.addToCart} icon="plus-circle" onPress={() => addToCart(item)} />
                            <View style={styles.cardImage}>
                                <Image
                                    style={styles.image}
                                    source={{ uri: item.image }}
                                />
                            </View>
                            <View style={styles.cardText}>
                            <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
                            <Text style={[styles.description, { color: theme.text }]}>{item.description}</Text>
                            <Text style={[styles.price, { color: theme.text }]}>ZAR {item.price.toFixed(2)}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginVertical: 10,
    },
    addToCart: {
        position: 'absolute',
        top: Spacing.medium - 8,
        right: Spacing.medium - 4,
        zIndex: 1,
    },
    cardImage: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        overflow: 'hidden',
        borderWidth: Dimensions.borderWidth,
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'cover',
    },
    cardText: {
        position: 'absolute',
        top: CARD_HEIGHT - 60,
        left: Spacing.medium,
    },
    name: {
        fontSize: Dimensions.heading3FontSize,
        fontWeight: 'bold',
        color: 'white',
    },
    description: {
        fontSize: Dimensions.captionFontSize,
        color: 'white',
    },
    price: {
        fontSize: Dimensions.heading3FontSize,
        color: 'white',
    }
})

export default FoodItemsCarousel;
