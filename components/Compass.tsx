import { Magnetometer } from 'expo-sensors';
import { useEffect, useState } from 'react';
import { View, Animated, Text, StyleSheet } from 'react-native';
export default function Compass() {
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    const subscription = Magnetometer.addListener((data) => {
      const angle = calculateAngle(data);
      setHeading(angle);
    });

    Magnetometer.setUpdateInterval(100);
    return () => subscription.remove();
  }, []);

  const calculateAngle = (magnetometer: any) => {
    const { x, y } = magnetometer;
    const angle = Math.atan2(y, x) * (180 / Math.PI);
    return angle >= 0 ? angle : angle + 360;
  };
  return (
    <View>
      <Text>{Math.round(heading)}</Text>
      <Animated.Image
        source={require('../assets/compass.png')}
        style={[styles.compass, { transform: [{ rotate: `${360 - heading}deg` }] }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({ compass: { width: 200, height: 200 } });
