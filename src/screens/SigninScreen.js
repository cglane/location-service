import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        title="Signin Screen"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        onSubmitTitle="Signin"
      />
      <NavLink text="No Account? Go to Sign Up." routeName="Signup" />
    </View>
  );
};
SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});
