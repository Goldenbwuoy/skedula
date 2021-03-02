import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const displayDateTime = (dateTime) => {
  console.log(dateTime);
  const date = new Date(dateTime).toDateString();
  const time = new Date(dateTime).toLocaleTimeString();
  return `${date}, ${time}`;
};

const AppointmentCard = ({
  appointment,
  navigation,
  title,
  noHeader,
  noFooter,
}) => {
  const { doctor } = appointment;
  return (
    <View style={styles.cardContainer}>
      {!noHeader && (
        <View style={styles.cardHeaderContainer}>
          <Text style={styles.cardHeading}>{title}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Appointments")}>
            <Text style={styles.cardMore}>See All</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.cardBody}>
        <View style={styles.cardBodyTop}>
          <Image
            style={styles.cardAvatar}
            source={require("../assets/doctor.jpg")}
          />
          <View style={styles.cardLeftSide}>
            <Text style={styles.cardName}>
              Dr {`${doctor.firstName} ${doctor.lastName}`}
            </Text>
            <Text style={styles.cardTime}>
              {new Date(appointment.start_time).toLocaleString()}
            </Text>
            <Text style={styles.cardAddress}>Address Here!!!!</Text>
            <View style={styles.iconMore}>
              <MaterialIcons name="read-more" size={24} color="gray" />
            </View>
          </View>
        </View>
        {!noFooter && <View style={styles.margin} />}

        {!noFooter && (
          <View style={styles.cardBodyBottom}>
            <View style={styles.cardGroupIcon}>
              <MaterialIcons name="cancel" size={30} color="red" />
              <Text style={styles.cardBottomTitle}>Cancel</Text>
            </View>
            <View style={styles.cardGroupIcon}>
              <EvilIcons name="calendar" size={30} color="#1c313a" />
              <Text style={styles.cardBottomTitle}>Calendar</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    paddingBottom: 0,
  },
  cardBody: {
    padding: 15,
    backgroundColor: "#fff",
    marginTop: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardBodyTop: {
    flexDirection: "row",
  },
  cardLeftSide: {
    paddingHorizontal: 10,
    flex: 1,
  },
  cardName: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardTime: {
    color: "#222",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
  },
  cardAddress: {
    color: "gray",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 5,
  },
  cardAvatar: {
    height: 60,
    width: 60,
    backgroundColor: "gray",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#1c313a",
  },
  cardHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardHeading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  cardMore: {
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.7)",
  },
  iconMore: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  margin: {
    height: 1,
    backgroundColor: "#1c313a",
    width: "100%",
    marginVertical: 10,
  },
  cardBodyBottom: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardBottomTitle: {
    fontSize: 14,
    marginTop: 5,
  },
  cardGroupIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
