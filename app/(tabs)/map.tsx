import { Platform, SafeAreaView, StatusBar, View, Text } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 bg-[#E0E2E7]">
      <SafeAreaView
        className="flex-1"
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <Text>Location here!</Text>
      </SafeAreaView>
    </View>
  );
}
