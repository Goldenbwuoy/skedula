import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DoctorHome = () => {
  return (
    <View style={styles.container}>
      <Text>Doctor Home Page</Text>
    </View>
  );
};

export default DoctorHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
