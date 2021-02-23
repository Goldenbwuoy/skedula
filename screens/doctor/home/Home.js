import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileContext from "../../../context/ProfileContext";

const Home = () => {
  const { profileState } = useContext(ProfileContext);
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 25, marginVertical: 15 }]}>
        Doctors Home Page
      </Text>
      <Text style={styles.text}>
        Welcome Dr{" "}
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
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
