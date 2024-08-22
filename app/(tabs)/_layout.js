import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

const iconSize = 28;

export default function TabLayout() {
  const { theme } = useContext(ThemeContext);

  return (
    <Tabs screenOptions={{
      headerShown: false
    }}>
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarActiveTintColor: theme.tabIconSelected,
          tabBarInactiveTintColor: theme.tabIconDefault,
          tabBarStyle: { backgroundColor: theme.background },
          headerStyle: { backgroundColor: theme.background },
          headerTitleStyle: { color: theme.text },    
          tabBarIcon: ({ color }) => <FontAwesome size={iconSize} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarActiveTintColor: theme.tabIconSelected,
          tabBarInactiveTintColor: theme.tabIconDefault,
          tabBarStyle: { backgroundColor: theme.background },
          headerStyle: { backgroundColor: theme.background },
          headerTitleStyle: { color: theme.text },    
          tabBarIcon: ({ color }) => <FontAwesome size={iconSize} name="shopping-cart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarActiveTintColor: theme.tabIconSelected,
          tabBarInactiveTintColor: theme.tabIconDefault,
          tabBarStyle: { backgroundColor: theme.background },
          headerStyle: { backgroundColor: theme.background },
          headerTitleStyle: { color: theme.text },    
          tabBarIcon: ({ color }) => <FontAwesome size={iconSize} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
