import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";
const screenWidth = Dimensions.get("window").width;

const DisplayCalendar = ({ openCalendar, setOpenCalendar, markedDate }) => {
  const markedDates = moment(markedDate).format("YYYY-MM-DD");

  return (
    <Modal animationType="slide" transparent={true} visible={openCalendar}>
      <View style={styles.container}>
        <View>
          <Calendar
            markedDates={{
              [markedDates]: {
                selected: true,
                marked: true,
              },
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.closebutton}
          onPress={() => setOpenCalendar(false)}
        >
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default DisplayCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: screenWidth / 3,
    marginBottom: screenWidth / 3,
    borderRadius: 30,
    padding: 20,
    width: "90%",
    alignSelf: "center",
  },
  closebutton: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  closeText: {
    fontSize: 17,
    padding: 5,
    color: "#00adf5",
  },
});
