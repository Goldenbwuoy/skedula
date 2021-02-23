import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#455a64",
      }}
    >
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
};

export default LoadingScreen;
