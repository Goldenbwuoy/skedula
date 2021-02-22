import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PatientHome = () => {
  return (
    <View style={styles.container}>
      <Text>Patient Home Page</Text>
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
