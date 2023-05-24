import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate({ routeName })}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

export default withNavigation(NavLink);

const styles = StyleSheet.create({ link: { color: "blue" } });
