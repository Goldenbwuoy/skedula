import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import ProfileContext from "../../../context/ProfileContext";
import { LinearGradient } from "expo-linear-gradient";
import AppointmentCard from "../../../components/AppointmentCard";

const screenWidth = Dimensions.get("window").width;

const Home = ({ navigation }) => {
  const { profileState } = useContext(ProfileContext);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          overflow: "hidden",
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 60,
          position: "absolute",
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.lineargGradient}
          colors={[
            "rgb(28, 49, 58)",
            "rgba(28, 49, 58, 0.3)",
            "rgba(28, 49, 58, 0.6)",
          ]}
        >
          <View style={styles.line} />
          <View style={[styles.line, { top: 130, left: -150 }]} />
          <View style={[styles.line, { top: 160, left: 0 }]} />
        </LinearGradient>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>
            Welcome {`${profileState.profile?.firstName}`}
          </Text>
          <Text style={styles.desc}>You have 1 upcoming appointments.</Text>
        </View>
        <AppointmentCard
          title="Your Next Appointment"
          appointment={{
            doctor: "Dr Neo Morpheus",
            time: "Monday, January 10th at 3:00 PM",
            address: "570 Beimen Road",
          }}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#455a64",
  },
  headingContainer: {
    padding: 20,
    paddingHorizontal: 30,
    marginTop: 30,
    marginBottom: 50,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  desc: {
    fontSize: 18,
    fontWeight: "400",
    color: "rgba(255, 255, 255, 0.6)",
    marginTop: 5,
  },
  lineargGradient: {
    height: screenWidth / 2,
    width: screenWidth,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  line: {
    position: "absolute",
    width: screenWidth,
    top: 100,
    left: -300,
    height: 80,
    backgroundColor: "rgba(255,255,255,0.1)",
    transform: [
      {
        rotate: "-35deg",
      },
    ],
    borderRadius: 60,
  },
});
