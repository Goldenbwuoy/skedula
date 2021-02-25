import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppointmentCard from "../../../components/AppointmentCard";

const Appointments = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <AppointmentCard
          noHeader
          noFooter
          appointment={{
            doctor: "Dr Neo Morpheus",
            time: "Monday, January 10th at 3:00 PM",
            address: "570 Beimen Road",
          }}
        />
        <AppointmentCard
          noHeader
          noFooter
          appointment={{
            doctor: "Dr Neo Morpheus",
            time: "Monday, January 10th at 3:00 PM",
            address: "570 Beimen Road",
          }}
        />
        <AppointmentCard
          noHeader
          noFooter
          appointment={{
            doctor: "Dr Neo Morpheus",
            time: "Monday, January 10th at 3:00 PM",
            address: "570 Beimen Road",
          }}
        />
        <AppointmentCard
          noHeader
          noFooter
          appointment={{
            doctor: "Dr Neo Morpheus",
            time: "Monday, January 10th at 3:00 PM",
            address: "570 Beimen Road",
          }}
        />
        <AppointmentCard
          noHeader
          noFooter
          appointment={{
            doctor: "Dr Neo Morpheus",
            time: "Monday, January 10th at 3:00 PM",
            address: "570 Beimen Road",
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
