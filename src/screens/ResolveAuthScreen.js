import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/authContext";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);
  useEffect(() => {
    tryLocalSignin();
  }, []);
  // Place to add loading icon
  return null;
};

export default ResolveAuthScreen;

const styles = StyleSheet.create({});
