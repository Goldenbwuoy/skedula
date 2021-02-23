import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Doctors = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Display Doctors Here</Text>
    </View>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
