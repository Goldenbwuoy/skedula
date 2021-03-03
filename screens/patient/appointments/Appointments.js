import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppointmentCard from "../../../components/AppointmentCard";
import ProfileContext from "../../../context/ProfileContext";

const Appointments = () => {
  const {
    profileState: { appointments },
  } = useContext(ProfileContext);

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        {appointments?.map((appointment) => (
          <AppointmentCard
            key={appointment._id}
            noHeader
            noFooter
            appointment={appointment}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
