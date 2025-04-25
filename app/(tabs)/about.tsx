import { View, Text, SafeAreaView, ScrollView, Platform, StatusBar, Image } from 'react-native';

export default function AboutScreen() {
  return (
    <SafeAreaView
      className="flex-1 bg-[#E0E2E7]"
      style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <ScrollView className="px-4 py-6">
        <View className="mb-6 items-center">
          <Image
            source={require('~/assets/icon.png')}
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
          />
          <Text className="mt-4 text-2xl font-bold text-gray-800">GeoShock</Text>
          <Text className="text-sm text-gray-600">Stay Safe. Stay Informed.</Text>
        </View>

        <View className="mb-4">
          <Text className="mb-2 text-lg font-semibold text-gray-700">About the App</Text>
          <Text className="text-sm leading-relaxed text-gray-600">
            GeoShock is a real-time earthquake tracking application that helps users stay informed
            about seismic activities in their region and around the world. The app automatically
            detects your location, shows nearby quakes on a map, and provides detailed information
            such as magnitude, location, and time of occurrence.
          </Text>
        </View>

        <View className="mb-4">
          <Text className="mb-2 text-lg font-semibold text-gray-700">Features</Text>
          <Text className="text-sm leading-relaxed text-gray-600">
            • Real-time earthquake monitoring{'\n'}• Map visualization of seismic activity{'\n'}•
            Radius visualization for latest quakes{'\n'}• Automatically fetches data based on your
            location{'\n'}• Future updates will include emergency guidelines and alerts
          </Text>
        </View>

        <View className="mb-4">
          <Text className="mb-2 text-lg font-semibold text-gray-700">Data Source</Text>
          <Text className="text-sm leading-relaxed text-gray-600">
            This application uses data from trusted public APIs and seismological databases to
            ensure timely and accurate earthquake data.
          </Text>
        </View>

        <View className="mb-4">
          <Text className="mb-2 text-lg font-semibold text-gray-700">Developer</Text>
          <Text className="text-sm leading-relaxed text-gray-600">
            Developed by Anıl Yavaş as a member of Fast 1 Labs, passionate about creating
            accessible, life-saving tools using modern mobile technology.
          </Text>
        </View>

        <Text className="mt-10 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} GeoShock. All rights reserved.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
