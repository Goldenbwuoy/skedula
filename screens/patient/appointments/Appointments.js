import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppointmentCard from "../../../components/AppointmentCard";
import { appointmentsByPatient } from "../api-patient";
import AuthContext from "../../../context/AuthContext";
import LoadingScreen from "../../shared/LoadingScreen";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    state: {
      auth: { token, user },
    },
  } = useContext(AuthContext);

  useEffect(() => {
    appointmentsByPatient({ patientAccount: user._id }, { token }).then(
      (data) => {
        setLoading(false);
        if (data && data.error) {
          console.log(data.error);
        } else {
          setAppointments(data);
        }
      }
    );
  }, [user, token]);

  if (loading) return <LoadingScreen />;

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
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
