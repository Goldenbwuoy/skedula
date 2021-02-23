import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileContext from "../../../context/ProfileContext";

const Home = () => {
  const { profileState } = useContext(ProfileContext);
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginVertical: 20, fontSize: 25 }]}>
        Patient Home Page
      </Text>
      <Text style={styles.text}>
        Welcome{" "}
        {`${profileState.profile?.firstName} ${profileState.profile?.lastName}`}
      </Text>
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
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
