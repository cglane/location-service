import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/locationContext";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
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
    </>
  );
};

export default TrackForm;

const styles = StyleSheet.create({});
