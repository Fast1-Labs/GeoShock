import { Dimensions, View, Text } from 'react-native';
import MapView, { Circle, Marker } from 'react-native-maps';

import { LatestQuakeLocation } from '~/types/types';

export default function LatestEarthquakeMap({
  latestQuakeLocation,
  fallbackCoords,
}: {
  latestQuakeLocation?: LatestQuakeLocation;
  fallbackCoords: { latitude: number; longitude: number };
}) {
  const latitude = latestQuakeLocation?.geometry.coordinates[1] || fallbackCoords.latitude;
  const longitude = latestQuakeLocation?.geometry.coordinates[0] || fallbackCoords.longitude;

  return (
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
          latitude,
          longitude,
          latitudeDelta: 2,
          longitudeDelta: 2,
        }}>
        {latestQuakeLocation && (
          <>
            <Marker
              coordinate={{
                latitude,
                longitude,
              }}
              title={`Magnitude ${latestQuakeLocation.properties.mag} Earthquake`}
              description={latestQuakeLocation.properties.place}
            />
            <Circle
              center={{ latitude, longitude }}
              radius={100000}
              strokeColor="rgba(255,0,0,0.5)"
              fillColor="rgba(255,0,0,0.2)"
            />
          </>
        )}
      </MapView>
    </View>
  );
}
