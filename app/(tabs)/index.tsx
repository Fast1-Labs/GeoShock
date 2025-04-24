import { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Platform,
  StatusBar,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';

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
              <View className="h-96 p-2">
                <Text className="mb-2 text-lg font-semibold">Nearby Earthquakes</Text>
                {earthquakes.length > 0 && (
                  <ScrollView
                    contentContainerClassName="gap-2"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}>
                    {earthquakes.map((quake) => (
                      <View key={quake.id} className="mb-2 rounded-lg bg-white p-3 shadow">
                        <Text className="font-medium text-red-600">
                          {quake.properties.mag} - {quake.properties.place}
                        </Text>
                        <Text className="text-xs text-gray-500">
                          {new Date(quake.properties.time).toLocaleString()}
                        </Text>
                      </View>
                    ))}
                  </ScrollView>
                )}
              </View>
              <View className="p-2">
                <Text className="mb-2 text-lg font-semibold">Latest Earthquake</Text>
                <MapView
                  style={{
                    width: Dimensions.get('window').width / 1.1,
                    height: Dimensions.get('window').height / 3.25,
                    flex: 1,
                    alignSelf: 'center',
                  }}
                  mapType="hybrid"
                  showsUserLocation
                  initialRegion={{
                    latitude: latestQuakeLocation?.geometry.coordinates[1] || location.latitude,
                    longitude: latestQuakeLocation?.geometry.coordinates[0] || location.longitude,
                    latitudeDelta: 2,
                    longitudeDelta: 2,
                  }}>
                  {latestQuakeLocation && (
                    <View className="flex-1">
                      <Marker
                        coordinate={{
                          latitude: latestQuakeLocation.geometry.coordinates[1],
                          longitude: latestQuakeLocation.geometry.coordinates[0],
                        }}
                        title={`Magnitude of ${latestQuakeLocation.properties.mag} Earthquake`}
                        description={latestQuakeLocation.properties.place}
                      />
                      <Circle
                        center={{
                          latitude: latestQuakeLocation.geometry.coordinates[1],
                          longitude: latestQuakeLocation.geometry.coordinates[0],
                        }}
                        radius={100000}
                        strokeColor="rgba(255,0,0,0.5)"
                        fillColor="rgba(255,0,0,0.2)"
                      />
                    </View>
                  )}
                </MapView>
              </View>
            </View>
          ) : (
            <Text>Failed to get location.</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
