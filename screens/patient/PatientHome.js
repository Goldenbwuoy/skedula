import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthContext from "../../context/AuthContext";
import { ACTIONS } from "../../context/reducer";
import { signOut } from "../auth/api-auth";

const PatientHome = () => {
  const { state, dispatch } = useContext(AuthContext);

  console.log(state.user);

  const handleSignOut = async () => {
    try {
      await signOut();
      dispatch({ type: ACTIONS.SIGN_OUT });
    } catch (err) {
      console.log("failed to signout");
    }
  };
  return (
    <View style={styles.container}>
      <Text>Patient Home Page</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          marginVertical: 15,
          padding: 8,
          borderRadius: 10,
        }}
        onPress={handleSignOut}
      >
        <Text style={{ color: "#fff" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PatientHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
