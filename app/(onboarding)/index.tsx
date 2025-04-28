import { router } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';

export default function Onboarding() {
  const slides = [
    {
      title: 'Welcome to GeoShock',
      description: 'Track and monitor earthquakes around you instantly.',
      image:
        'https://images.pexels.com/photos/1710813/pexels-photo-1710813.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Live Earthquake Map',
      description: 'See real-time earthquake locations and details worldwide.',
      image:
        'https://images.pexels.com/photos/15558948/pexels-photo-15558948/free-photo-of-people-in-a-destroyed-city.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Stay Prepared',
      description: 'Get useful earthquake survival tips and guidelines.',
      image:
        'https://images.pexels.com/photos/7794436/pexels-photo-7794436.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <SafeAreaView
      className="flex-1 bg-[#E0E2E7]"
      style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <Swiper
        loop={false}
        showsPagination
        dot={<View className="m-1 mb-auto h-3 w-3 rounded-full bg-gray-400" />}
        activeDot={<View className="m-1 h-3 w-3 rounded-full bg-red-500" />}>
        {slides.map((slide, index) => (
          <View key={index} className="flex-1 items-center justify-center p-6">
            <Text className="mb-2 text-center text-3xl font-bold text-red-600">{slide.title}</Text>
            <Image source={{ uri: slide.image }} className="mb-2 h-1/2 w-full rounded" />
            <Text className="mt-4 text-center text-base text-gray-700">{slide.description}</Text>

            {index === slides.length - 1 ? (
              <TouchableOpacity
                className="mt-10 rounded-full bg-red-600 px-6 py-3"
                onPress={() => router.replace('/(tabs)')}>
                <Text className="text-lg font-semibold text-white">Get Started</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                className="mt-10 rounded-full bg-gray-600 px-6 py-3"
                onPress={() => router.replace('/(tabs)')}>
                <Text className="text-lg font-semibold text-white">Skip</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
}
