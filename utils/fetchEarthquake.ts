export const fetchEarthquake = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=${latitude}&longitude=${longitude}&maxradius=200`;
  const response = await fetch(url);
  const data = await response.json();
  return data.features;
};
