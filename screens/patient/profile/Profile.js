import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthContext from "../../../context/AuthContext";
import { AUTH_ACTIONS } from "../../../context/reducers/authReducer";
import { signOut } from "../../auth/api-auth";

const Profile = () => {
  const { state, dispatch } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await signOut();
      dispatch({ type: AUTH_ACTIONS.SIGN_OUT });
    } catch (err) {
      console.log("failed to signout");
    }
  };
  return (
    <View style={styles.container}>
      <Text>This is the Profile</Text>
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

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
