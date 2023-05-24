import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, Input, Button } from "react-native-elements";
import Map from "../components/Map";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";
import { requestForegroundPermissionsAsync } from "expo-location";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null)
  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();

      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };
  useEffect(() => {startWatching()}, []);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer />
      <Text>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Please Enable Location Services</Text>: null}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create();
