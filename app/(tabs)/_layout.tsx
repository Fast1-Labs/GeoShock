import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#34D399',
        tabBarInactiveTintColor: '#D1D5DB',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#1E1E1E', borderColor: '#374151' },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="earth" color={color} size={25} />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="map" color={color} size={25} />,
        }}
      />
      <Tabs.Screen
        name="guide"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="book" color={color} size={25} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="history" color={color} size={25} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="info" color={color} size={25} />,
        }}
      />
    </Tabs>
  );
}
