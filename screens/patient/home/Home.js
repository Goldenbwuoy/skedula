import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Patient Home Page</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#455a64",
  },
});
