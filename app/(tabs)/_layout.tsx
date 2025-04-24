import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
        tabBarShowLabel: false,
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
    </Tabs>
  );
}
