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

import LatestEarthquakeMap from '~/components/LatestEarthquakeMap';
import NearbyEarthquakeList from '~/components/NearbyEarthquakeList';
import { Earthquake, LatestQuakeLocation, LocationType } from '~/types/types';
import { fetchEarthquake } from '~/utils/fetchEarthquake';
import { getLocation } from '~/utils/getLocation';

export default function Home() {
  const [location, setLocation] = useState<LocationType | null>(null);
  const [loading, setLoading] = useState(true);
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [latestQuakeLocation, setLatestQuakeLocation] = useState<LatestQuakeLocation>();

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
        const sorted = results.sort((a: any, b: any) => b.properties.time - a.properties.time);
        const latestQuake = sorted[0];
        setLatestQuakeLocation(latestQuake);
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
        <ScrollView showsVerticalScrollIndicator={false}>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : location ? (
            <View className="p-2">
              <View className="pb-5">
                <Text className="text-center font-semibold">
                  Location: {location.city},{location.region}/{location.country}
                </Text>
              </View>
              <NearbyEarthquakeList earthquakes={earthquakes} />
              <LatestEarthquakeMap
                latestQuakeLocation={latestQuakeLocation}
                fallbackCoords={{ latitude: location.latitude, longitude: location.longitude }}
              />
            </View>
          ) : (
            <Text>Failed to get location.</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
