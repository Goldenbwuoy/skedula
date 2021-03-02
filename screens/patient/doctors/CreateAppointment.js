import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from "react-native";
import { createAppointment } from "../api-patient";
import DateTimePicker from "@react-native-community/datetimepicker";
import AuthContext from "../../../context/AuthContext";

const PLATFORMS = {
  IOS: "ios",
  ANDROID: "android",
};

const CreateAppointment = ({ route, navigation }) => {
  const { doctor } = route.params;
  const {
    state: {
      auth: { token, user },
    },
  } = useContext(AuthContext);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === PLATFORMS.IOS);
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === PLATFORMS.IOS);
    setTime(currentTime);
  };

  const getDateString = (date, time, display) => {
    let year = date.getFullYear();
    let day =
      date.getDate().toString().length === 1
        ? "0" + date.getDate()
        : date.getDate();
    let month =
      date.getMonth().toString().length === 1
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let hours =
      time.getHours().toString().length === 1
        ? "0" + time.getHours()
        : time.getHours();
    let minutes =
      time.getMinutes().toString().length === 1
        ? "0" + time.getMinutes()
        : time.getMinutes();
    let dateString = display
      ? `${year}/${month}/${day} ${hours}:${minutes}`
      : `${year}-${month}-${day}T${hours}:${minutes}`;
    return dateString;
  };

  const handleCreate = () => {
    setLoading(true);
    const start_time = getDateString(date, time, false);
    const params = {
      patientAccount: user._id,
      doctorId: doctor._id,
    };

    createAppointment(params, { token }, { start_time })
      .then((data) => {
        setLoading(false);
        if (data && data.error) {
          console.log("failed");
        } else {
          navigation.goBack();
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const AndroidPicker = () => (
    <>
      <TouchableOpacity
        style={[
          styles.datePickerStyle,
          { width: 150, alignItems: "center", justifyContent: "center" },
        ]}
        onPress={() => setShowDatePicker(true)}
      >
        <Text>Set Date</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          onChange={onDateChange}
          minimumDate={new Date()}
        />
      )}

      <TouchableOpacity
        style={[
          styles.datePickerStyle,
          { width: 150, alignItems: "center", justifyContent: "center" },
        ]}
        onPress={() => setShowTimePicker(true)}
      >
        <Text>Set Time</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={time} // Initial time from state
          mode="time" // The enum of date, datetime and time
          onChange={onTimeChange}
        />
      )}
    </>
  );

  const IOSPicker = () => (
    <>
      <TouchableOpacity style={[styles.datePickerStyle, { width: 150 }]}>
        <DateTimePicker
          value={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          onChange={onDateChange}
          display="default"
          minimumDate={new Date()}
        />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.datePickerStyle, { width: 80 }]}>
        <DateTimePicker
          value={time} // Initial time from state
          mode="time" // The enum of date, datetime and time
          display="default"
          onChange={onTimeChange}
        />
      </TouchableOpacity>
    </>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topTextContainer}>
        <Text style={styles.topText}>Set Date and Time</Text>
      </View>
      <View style={styles.pickerContainer}>
        {Platform.OS === PLATFORMS.IOS ? <IOSPicker /> : <AndroidPicker />}
      </View>
      {Platform.OS === PLATFORMS.ANDROID && (
        <View style={{ alignSelf: "center", marginVertical: 20 }}>
          <Text style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: 18 }}>
            {getDateString(date, time, true)}
          </Text>
        </View>
      )}

      <TouchableOpacity
        onPress={handleCreate}
        disabled={loading}
        style={styles.button}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Book</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CreateAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  topTextContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 30,
  },
  topText: {
    fontSize: 25,
    color: "#fff",
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  datePickerStyle: {
    // width: 300,
    backgroundColor: "rgba(239,240,241, 0.8)",
    borderRadius: 15,
    padding: 7,
    fontSize: 16,
    color: "#fff",
    marginVertical: 15,
    height: 45,
  },
  button: {
    backgroundColor: "#1c313a",
    width: 150,
    borderRadius: 25,
    marginVertical: 15,
    paddingVertical: 10,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
  },
});
