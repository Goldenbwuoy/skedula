import React, { useContext } from "react";
import { StyleSheet, ScrollView } from "react-native";
import ProfileContext from "../../../context/ProfileContext";
import AuthContext from "../../../context/AuthContext";
import DoctorAppointmentCard from "./DoctorAppointmentCard";

const Appointments = () => {
  const {
    profileState: { appointments },
  } = useContext(ProfileContext);
  const {
    state: {
      auth: { token },
    },
  } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      {appointments?.map((appointment) => (
        <DoctorAppointmentCard
          key={appointment._id}
          noFooter
          noHeader
          appointment={appointment}
        />
      ))}
    </ScrollView>
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
