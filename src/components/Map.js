import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Polyline } from "react-native-maps";
const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
      points.push({
        latitude: 37.32233 + i * 0.002,
        longitude: -122.03121 + i * 0.001,
      });
    } else {
      points.push({
        latitude: 37.32233 - i * 0.002,
        longitude: -122.03121 - i * 0.002,
      });
    }
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.32233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
    width: 300,
  },
});
