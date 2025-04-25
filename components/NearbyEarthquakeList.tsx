import { View, Text, ScrollView } from 'react-native';

import { Earthquake } from '~/types/types';

export default function NearbyEarthquakeList({ earthquakes }: { earthquakes: Earthquake[] }) {
  return (
    <View className="h-96 p-2">
      <Text className="mb-2 text-lg font-semibold">Nearby Earthquakes</Text>
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
    </View>
  );
}
