import { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Platform, StatusBar, ActivityIndicator } from 'react-native';

import { getLocation } from '~/utils/getLocation';

export default function Home() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
    city?: string;
    region?: string;
    country?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      const coords = await getLocation();
      if (coords) {
        setLocation(coords);
      }
      setLoading(false);
    };
    fetchLocation();
  }, []);

  return (
    <View className="flex-1 bg-[#E0E2E7]">
      <SafeAreaView
        className="flex-1"
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : location ? (
          <View className="p-2">
            <Text className="text-center font-semibold">
              Location: {location.city},{location.region}/{location.country}
            </Text>
          </View>
        ) : (
          <Text>Failed to get location.</Text>
        )}
      </SafeAreaView>
    </View>
  );
}
