import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/locationContext";
import useSaveTrack from "../hooks/useSaveTrack"

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack()
  return (
    <>
      <Spacer />
      <Input
        value={name}
        placeholder="Name of Track"
        onChangeText={changeName}
      />
      {recording ? (
        <Button title="Stop Recording" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
      <Spacer/>
      {!recording && locations.length ? (
        <Button onPress={saveTrack
        } title="Save Recording" />
      ) : null}
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
