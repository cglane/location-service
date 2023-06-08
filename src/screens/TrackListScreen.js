import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useContext } from "react";
import { Context as TrackContext } from "../context/trackContext";
import { NavigationEvents } from "react-navigation";
import { ListItem } from "react-native-elements";
const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { _id: item._id })
              }
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
      <Button
        title="Go Back to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};
TrackListScreen.navigationOptions = () => {
  return {
    title: "Tracks",
  };
};
export default TrackListScreen;

const styles = StyleSheet.create({});
