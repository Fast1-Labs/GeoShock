import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Platform,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import { fetchEarthquake } from '~/utils/fetchEarthquake';
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
  const [earthquakes, setEarthquakes] = useState<any[]>([]);

  useEffect(() => {
    const fetchLocation = async () => {
      const coords = await getLocation();
      if (coords) {
        setLocation(coords);
        const results = await fetchEarthquake({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        setEarthquakes(results);
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
            <View className="pb-5">
              <Text className="text-center font-semibold">
                Location: {location.city},{location.region}/{location.country}
              </Text>
            </View>
            <View className="p-2">
              {earthquakes.length > 0 && (
                <ScrollView className="mb-8 mt-4 px-2" showsVerticalScrollIndicator={false}>
                  <Text className="mb-2 text-lg font-semibold">Nearby Earthquakes</Text>
                  {earthquakes.map((quake) => (
                    <View key={quake.id} className="mb-2 rounded-lg bg-white p-3 shadow">
                      <Text className="font-medium text-red-600">
                        M{quake.properties.mag} - {quake.properties.place}
                      </Text>
                      <Text className="text-xs text-gray-500">
                        {new Date(quake.properties.time).toLocaleString()}
                      </Text>
                    </View>
                  ))}
                </ScrollView>
              )}
            </View>
          </View>
        ) : (
          <Text>Failed to get location.</Text>
        )}
      </SafeAreaView>
    </View>
  );
}
