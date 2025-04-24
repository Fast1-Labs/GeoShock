import * as Location from 'expo-location';

export const getLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission to access location was denied');
    return null;
  }

  const location = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = location.coords;

  const [place] = await Location.reverseGeocodeAsync({
    latitude,
    longitude,
  });

  return {
    latitude,
    longitude,
    city: place.city ?? undefined,
    region: place.region ?? undefined,
    country: place.country ?? undefined,
  };
};
