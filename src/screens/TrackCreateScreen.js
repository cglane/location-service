import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context as LocationContext } from "../context/locationContext";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import {
  SafeAreaView,
  NavigationEvents,
  withNavigationFocus,
} from "react-navigation";
import Spacer from "../components/Spacer";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation, state } = useContext(LocationContext);
  const [err] = useLocation(isFocused, state.recording, (location) => {
    addLocation(location, state.recording);
  });

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.wrapper}>
      <Spacer />
      <Text h2>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Please Enable Location Services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
