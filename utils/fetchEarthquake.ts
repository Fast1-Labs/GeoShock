export const fetchEarthquake = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  try {
    const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=${latitude}&longitude=${longitude}&maxradius=10`;
    const response = await fetch(url);
    const text = await response.text();
    const data = JSON.parse(text);
    return data.features;
  } catch (error) {
    console.error('Error fetching earthquakes:', error);
    return [];
  }
};
