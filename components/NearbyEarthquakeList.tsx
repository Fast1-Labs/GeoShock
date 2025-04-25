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
          <View
            key={quake.id}
            className="mb-2 flex-row items-center rounded-lg bg-white p-3 shadow">
            <View className="mr-5 h-10 w-10 items-center justify-center rounded bg-red-500">
              <Text className="text-lg font-semibold text-white">{quake.properties.mag}</Text>
            </View>
            <View>
              <Text className="font-medium text-gray-600">{quake.properties.place}</Text>
              <Text className="text-xs text-gray-500">
                {new Date(quake.properties.time).toLocaleString()}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
