
import { useContext } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import { CartContext } from '../../contexts/CartContext';
import { Dimensions, Spacing } from '../../constants';
import MainHeader from '../../components/MainHeader';
import { router } from 'expo-router';
import ButtonIcon from '../../components/ButtonIcon';
import Divider from '../../components/Divider';
import { ThemeContext } from '../../contexts/ThemeContext';

const CARD_WIDTH = Dimensions.width / 4;
const CARD_HEIGHT = CARD_WIDTH;

function CartScreen() {
  const { cartItems, removeFromCart, updateItemQuantity, clearCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.cardImage}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
          </View>
          <View style={styles.cardText}>
            <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
            <Text style={[styles.price, { color: theme.text }]}>ZAR {item.price.toFixed(2)}</Text>
            <TouchableOpacity style={[styles.removeButton, { backgroundColor: theme.background }]} onPress={() => { removeFromCart(item.id) }}>
              <Text style={[styles.removeButtonText, { color: theme.secondary }]}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardButtons}>
          <ButtonIcon icon="plus-square" onPress={() => { updateItemQuantity(item.id, item.quantity + 1) }} />
          <Text style={{ color: theme.text }}>{item.quantity}</Text>
          <ButtonIcon icon="minus-square" onPress={() => { updateItemQuantity(item.id, item.quantity - 1) }} />
        </View>
      </View>
    </View>
  );

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: theme.background}]}>
      <MainHeader
        title="Cart"
        icon='heart-o'
        onPress={() => router.push('/wishlist')}
      />
      <Divider />
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: theme.text }]}>Total: ZAR {totalCost.toFixed(2)}</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: theme.background }]} onPress={clearCart}>
          <Text style={[styles.buttonText, { color: theme.secondary }]}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.large,
  },
  cardContainer: {
    marginTop: Spacing.large,
  },
  card: {
    flexDirection: 'row',
    borderWidth: Dimensions.borderWidth,
    padding: Spacing.small,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImage: {
    overflow: 'hidden',
  },
  cardText: {
    paddingVertical: Spacing.small,
    marginLeft: 8,
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'cover',
  },
  cardButtons: {
    paddingVertical: Spacing.small,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  footer: {
    marginTop: Spacing.large,
  },
  footerText: {
    fontSize: Dimensions.heading2FontSize,
    alignSelf: 'flex-end',
    paddingRight: Spacing.medium,
    paddingBottom: Spacing.large / 1.5,
  },
  button: {
    paddingHorizontal: Spacing.large,
    paddingTop: Spacing.medium,
    paddingBottom: Spacing.large / 1.5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: Dimensions.heading3FontSize,
    fontWeight: 'bold',
  },
  removeButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
    marginTop: Spacing.small,
  },
  removeButtonText: {
    fontSize: Dimensions.captionFontSize,
    fontWeight: 'bold',
  },
  name: {
    fontSize: Dimensions.heading3FontSize,
    fontWeight: 'bold',
  },
  price: {
    fontSize: Dimensions.heading3FontSize,
  },
});

export default CartScreen;
