import { ChevronDown, ChevronUp } from 'lucide-react-native';
import { useState } from 'react';
import { View, Text, Pressable, FlatList } from 'react-native';

import guidelines from '~/assets/data/guide.json';

type Guideline = {
  title: string;
  description: string;
  tips: string[];
};

export default function EarthquakeGuidelines() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <View className="bg-[#E0E2E7] p-4">
      <Text className="mb-2  text-lg font-semibold">Earthquake Safety Guidelines</Text>

      {guidelines.map((section: Guideline, index: number) => (
        <View key={index} className="mb-4 rounded-xl border border-gray-200 bg-white p-3 shadow-md">
          <Pressable
            onPress={() => toggleSection(index)}
            className="flex-row items-center justify-between">
            <Text className="text-lg font-semibold text-black">{section.title}</Text>
            {expandedIndex === index ? (
              <ChevronUp color="black" size={20} />
            ) : (
              <ChevronDown color="black" size={20} />
            )}
          </Pressable>

          {expandedIndex === index && (
            <View className="mt-2">
              <Text className="mb-2 text-sm text-gray-600">{section.description}</Text>
              <FlatList
                data={section.tips}
                scrollEnabled={false}
                keyExtractor={(item, i) => i.toString()}
                renderItem={({ item }) => (
                  <View className="mb-2 flex-row items-start">
                    <Text className="mr-2 font-bold text-red-500">•</Text>
                    <Text className="text-sm text-gray-800">{item}</Text>
                  </View>
                )}
              />
            </View>
          )}
        </View>
      ))}
    </View>
  );
}
