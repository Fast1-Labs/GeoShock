import { SafeAreaView, View, Text, Platform, StatusBar } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 bg-[#F3F4F6]">
      <SafeAreaView
        className="flex-1"
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <Text>Location here!</Text>
      </SafeAreaView>
    </View>
  );
}
