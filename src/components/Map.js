import { StyleSheet, Text, View } from "react-native";

import React, { useContext } from "react";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/locationContext";
import { ActivityIndicator } from "react-native-paper";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ margingTop: 200 }} />;
  } else {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        // Continues to update
        // region={{
        //   ...currentLocation.coords,
        //   latitudeDelta: 0.01,
        //   longitudeDelta: 0.01,
        // }}
      >
        <Circle
          center={currentLocation.coords}
          // Meters
          radius={50}
          strokeColor="rgba(150, 158, 255, 1.0)"
          fillColor="rgba(158, 158, 255, 0.3)"
        ></Circle>
      </MapView>
    );
  }
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
    width: "100%",
  },
});
