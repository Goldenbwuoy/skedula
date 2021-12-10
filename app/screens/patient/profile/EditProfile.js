import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Edit Profile</Text>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
