import { useState, useEffect } from 'react';
import { Platform, SafeAreaView, StatusBar, View, ActivityIndicator, Text } from 'react-native';

import NearbyEarthquakeList from '~/components/NearbyEarthquakeList';
import { Earthquake, LocationType } from '~/types/types';
import { fetchEarthquake } from '~/utils/fetchEarthquake';
import { getLocation } from '~/utils/getLocation';

export default function History() {
  const [location, setLocation] = useState<LocationType>();
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (!location)
    return (
      <View className="flex-1 items-center justify-center bg-[#E0E2E7]">
        <Text className="font-semibold text-red-500">Location has not been found!</Text>
      </View>
    );

  if (loading)
    return (
      <View className="flex-1 items-center justify-center bg-[#E0E2E7]">
        <ActivityIndicator size="large" />
      </View>
    );
  return (
    <View className="flex-1 bg-[#E0E2E7]">
      <SafeAreaView
        className="flex-1"
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <View className="p-2">
          <Text className="p-2 text-lg font-semibold">Latest Earthquakes</Text>
          <NearbyEarthquakeList earthquakes={earthquakes} />
        </View>
      </SafeAreaView>
    </View>
  );
}
