import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProfileContext from "../../../context/ProfileContext";
import AuthContext from "../../../context/AuthContext";
import { appointmentsByDoctor } from "../api-doctor";
import LoadingScreen from "../../shared/LoadingScreen";
import DoctorAppointmentCard from "./DoctorAppointmentCard";

const Appointments = () => {
  const {
    profileState: { profile },
  } = useContext(ProfileContext);
  const {
    state: {
      auth: { token },
    },
  } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appointmentsByDoctor({ doctorAccount: profile?.account }, { token }).then(
      (data) => {
        setLoading(false);
        if (data && data.error) {
          console.log(data.error);
        } else {
          setAppointments(data);
        }
      }
    );
  }, []);

  console.log(appointments);

  if (loading) return <LoadingScreen />;

  return (
    <ScrollView style={styles.container}>
      {appointments.map((appointment) => (
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
