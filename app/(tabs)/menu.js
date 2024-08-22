import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import MainHeader from '../../components/MainHeader';
import SectionHeader from '../../components/SectionHeader';
import FoodItemsList from '../../components/FoodItemsList';
import FoodItemsCarousel from '../../components/FoodItemsCarousel';
import { useContext, useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Dimensions, Spacing } from "../../constants";
import { router } from 'expo-router';
import { ThemeContext } from '../../contexts/ThemeContext';

const foodItems = [
  {
    id: 1,
    name: 'Chip Icebox Cake',
    description: "This mocha chip icebox cake is an absolutely lusc..",
    price: 70.00,
    image: 'https://www.allrecipes.com/thmb/OLKUCa8zWQ153MWCXAG0-LNsM2M=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8694964_Mocha-Chip-Icebox-Cake-4x3-cropped-12813b81487b404db4458431dc8f72c1.jpg'
  },
  {
    id: 2,
    name: 'Hotdog Roll-Ups',
    description: "Here's a fun and tasty twist on a classic dog.",
    price: 54.98,
    image: 'https://www.allrecipes.com/thmb/Am630dWY-0P5ema-88ecVxmxAz0=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8678872-Hot-Dog-Roll-Ups-ddmfs-3x4-039-989de4fe4d4e41d0a9440d94010e536a.jpg'
  },
  {
    id: 3,
    name: 'Pot Chicago Beef',
    description: "This Instant Pot Chicago beef takes a tough..",
    price: 80.00,
    image: 'https://www.allrecipes.com/thmb/gpt5v1kgLiRcCvhuDHnMb40FSYY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8696994_Instant-Pot-Chicago-Beef_Dotdash-Meredith-Food-Studios_4x3-9c2ca2bec01b4e0d8b3ccd8ef5284601.jpg'
  },
  {
    id: 4,
    name: 'Apple Spice Rolls',
    description: "​​A buttery apple filling and apple pie spic..",
    price: 79.00,
    image: 'https://www.allrecipes.com/thmb/erbQfFtIXN6gk6B3OL-mEs1zJDw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8690218-AppleSpiceRolls-Allrecipes-Magazine-GOLDMAN_ALR_FallBZ_WakeUp_R317338_36163-4x3-de9f69e8d3374f50bfe5c69e5d2be4b5.jpg'
  },
  {
    id: 5,
    name: 'Steak and Fry Salad',
    description: "This steak and fry salad is a country clu..",
    price: 95.00,
    image: 'https://www.allrecipes.com/thmb/skeFmMINzyMp-yVQxYM-q_lDDNc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8697630_Steak-and-Fry-Salad_Dotdash-Meredith-Food-Studios_4x3-eba12dd379df4883927a078eaa320414.jpg'
  },
  {
    id: 6,
    name: 'Taco Sweet Potatoes',
    description: "These easy stuffed taco sweet potatoes f..",
    price: 77.00,
    image: 'https://www.allrecipes.com/thmb/FJhNZR7OWiNCok2ATPqldW9Kcuk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8697542_Easy-Stuffed-Taco-Sweet-Potatoes_Dotdash-Meredith-Food-Studios_4x3-48cd96eb4e3343a5875f8e36d31ddbea.jpg'
  },
];

function MenuScreen() {
  const [search, setSearch] = useState('');
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <MainHeader
        title="Food Delivery App"
        icon='bell'
        onPress={() => { router.push('/notifications') }}
      />
      <View style={styles.searchContainer}>
        <View style={styles.inner}>
          <View style={styles.search}>
            <FontAwesome size={Dimensions.iconSize} name="search" color={theme.icon} />
          </View>
          <TextInput
            style={[styles.field, {borderColor: theme.text}]}
            placeholder="Search"
            placeholderTextColor={theme.text}
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionHeader title="Featured" />
        <FoodItemsCarousel list={foodItems} />
        <SectionHeader
          title="Recommended For You"
          buttonTitle="View All"
          onPress={() => { }}
        />
        <FoodItemsList list={foodItems} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.large,
  },
  searchContainer: {
    paddingTop: Spacing.large,
    paddingBottom: Spacing.large / 1.5,
  },
  inner: {
    flexDirection: 'row',
  },
  search: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  field: {
    paddingLeft: Spacing.extraLarge + Spacing.small,
    paddingRight: Spacing.medium,
    paddingVertical: Spacing.medium,
    flex: 1,
    height: 54,
    borderWidth: Dimensions.borderWidth,
  },
});

export default MenuScreen;
