import { Platform, SafeAreaView, StatusBar, View } from 'react-native';

import Guideline from '~/components/Guideline';

export default function Guide() {
  return (
    <View className="flex-1 bg-[#E0E2E7]">
      <SafeAreaView
        className="flex-1"
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <Guideline />
      </SafeAreaView>
    </View>
  );
}
