import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Login from "./screens/auth/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#455a64",
    alignItems: "center",
    justifyContent: "center",
  },
});
