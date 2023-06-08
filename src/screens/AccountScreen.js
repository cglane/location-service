import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";
import { SafeAreaView } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer/>
      <Text style={{ fontSize: 40 }}> AccountScreen</Text>
      <Button title="Sign Out" onPress={signout} />
    </SafeAreaView>
  );
};
AccountScreen.navigationOptions = {
  title:"Account",
  tabBarIcon: <FontAwesome name="gear" size={20}/>
}
export default AccountScreen;

const styles = StyleSheet.create({});
