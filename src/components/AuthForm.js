import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Spacer from "./Spacer";
import { Text, Input, Button } from "react-native-elements";

const AuthForm = ({ onSubmit, errorMessage, title, onSubmitTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3>{title}</Text>
      </Spacer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
        label="Email"
      />
      <Spacer />
      <Input
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
        label="Password"
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer />
      <Button
        onPress={() => onSubmit({ email, password })}
        title={onSubmitTitle}
      />
      <Spacer />
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});
