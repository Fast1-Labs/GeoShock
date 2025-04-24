import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: '#6B7280',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' },
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
