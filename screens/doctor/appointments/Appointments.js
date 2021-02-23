import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Appointments = () => {
  return (
    <View style={styles.container}>
      <Text>Display Appointments with Patients Here</Text>
    </View>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
