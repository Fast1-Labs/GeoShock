import { useEffect, useState } from 'react';
import { ActivityIndicator, Platform, SafeAreaView, StatusBar, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { Earthquake, LocationType } from '~/types/types';
import { fetchEarthquake } from '~/utils/fetchEarthquake';
import { getLocation } from '~/utils/getLocation';

export default function Home() {
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
        <MapView
          style={{ flex: 1 }}
          showsUserLocation
          mapType="hybrid"
          initialRegion={{
            latitude: location?.latitude || 38.4237,
            longitude: location?.longitude || 27.1428,
            latitudeDelta: 3,
            longitudeDelta: 3,
          }}>
          {earthquakes.map((quake) => (
            <Marker
              key={quake.id}
              coordinate={{
                latitude: quake.geometry.coordinates[1],
                longitude: quake.geometry.coordinates[0],
              }}
              title={`${quake.properties.mag}`}
              description={`${quake.properties.place} - ${new Date(quake.properties.time).toLocaleString()}`}
              pinColor="red"
            />
          ))}
        </MapView>
      </SafeAreaView>
    </View>
  );
}
