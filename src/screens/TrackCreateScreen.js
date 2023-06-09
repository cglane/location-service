import { StyleSheet } from "react-native";
import React, { useContext, useCallback } from "react";
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
// github.io/vector-icons
import { FontAwesome } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);
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
TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
