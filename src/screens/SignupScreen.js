import { StyleSheet, View } from 'react-native'
import React, {useState, useContext} from 'react'
import {Text, Input, Button} from "react-native-elements"
import Spacer from '../components/Spacer'
import {Context as AuthContext} from "../context/authContext"

const SignupScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState( "")
  return ( 
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>        
      <Input autoCapitalize='none' autoCorrect={false} value={email} onChangeText={setEmail} label="Email"/>
      <Spacer/>
      <Input secureTextEntry autoCapitalize='none' autoCorrect={false} value={password} onChangeText={setPassword} label="Password"/>
      {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text>: null}
      <Spacer/>
      <Button onPress={()=> signup
      ({email, password})} title="Sign Up"/>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
   		return {
   		headerShown: false,
   		};
  };
export default SignupScreen

const styles = StyleSheet.create({container: {
  flex: 1,
  justifyContent: "center",
  marginBottom: 250
}, errorMessage: {
  fontSize: 16, color: "red", marginLeft: 15, marginTop: 15,
}})