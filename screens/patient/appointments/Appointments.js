import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppointmentCard from "../../../components/AppointmentCard";
import { appointmentsByPatient } from "../api-patient";
import AuthContext from "../../../context/AuthContext";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const {
    state: {
      auth: { token, user },
    },
  } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    appointmentsByPatient({ patientAccount: user._id }, { token }).then(
      (data) => {
        if (data && data.error) {
          console.log(data.error);
        } else {
          setAppointments(data);
        }
      }
    );
  }, [user, token]);

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        {appointments.map((appointment) => (
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
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
