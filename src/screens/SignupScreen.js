import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import React, { useContext } from "react";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AuthForm
        title="Signin Screen"
        errorMessage={state.errorMessage}
        onSubmit={signup}
      />
      <TouchableOpacity onPress={() => navigate()}>
        <Text style={styles.link}>Already have an account, signin</Text>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
export default SignupScreen;
const styles = StyleSheet.create({
  link: { color: "blue" },
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});
