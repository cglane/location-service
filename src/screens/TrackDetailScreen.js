import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context as TrackContext } from "../context/trackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find((t) => {
    return t._id == _id;
  });
  const initialCoords = track.locations[0].coords;
  return (
    <View>
      <Text>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((x) => x.coords)} />
      </MapView>
    </View>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({map: {height: 300}});
