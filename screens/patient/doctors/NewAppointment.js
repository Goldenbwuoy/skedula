import React, { useContext, useEffect, useState } from "react";
import {
	View,
	Text,
	Modal,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Animated,
} from "react-native";
import AuthContext from "../../../context/AuthContext";
import { createAppointment } from "../api-patient";
import ProfileContext from "../../../context/ProfileContext";
import { PROFILE_ACTIONS } from "../../../context/reducers/profileReducer";
import { Calendar } from "react-native-calendars";
import SelectTime from "./SelectTime";
import {
	MORNING_TIMES,
	MORNING_WORKING_HOURS,
} from "../../../constants/constants";
import { FlatList } from "react-native";

const NewAppointment = ({ openModal, setOpenModal }) => {
	const today = new Date();
	const [date, setDate] = useState("");
	const [timeOfDay, setTimeOfDay] = useState({
		times: MORNING_TIMES,
		workingHours: MORNING_WORKING_HOURS,
	});
	const [timeValues, setTimeValues] = useState({
		active: 0,
		xTabOne: 0,
		xTabTwo: 0,
		translateX: new Animated.Value(0),
	});

	const selectedDay = (day) => {
		setDate(day.dateString);
	};

	console.log(timeOfDay);

	const handleCreate = () => {};

	return (
		<Modal animationType="slide" transparent={true} visible={openModal}>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => setOpenModal(false)}>
						<Text style={styles.headerText}>Cancel</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text style={styles.headerText}>Proceed to pay</Text>
					</TouchableOpacity>
				</View>
				<ScrollView>
					<View style={styles.calendar}>
						<Calendar
							minDate={today}
							onDayPress={(day) => selectedDay(day)}
							markedDates={{
								[date]: {
									selected: true,
									color: "#00B0BF",
									textColor: "#fff",
								},
							}}
						/>
					</View>
					<SelectTime
						timeValues={timeValues}
						setTimeValues={setTimeValues}
						timeOfDay={timeOfDay}
						setTimeOfDay={setTimeOfDay}
					/>
				</ScrollView>
			</View>
		</Modal>
	);
};

export default NewAppointment;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		marginTop: 25,
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
	},
	closeButton: {
		color: "white",
		fontSize: 17,
		marginLeft: 8,
		fontWeight: "700",
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#CACACA",
		paddingVertical: 20,
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		paddingHorizontal: 15,
	},
	headerText: {
		color: "#01478F",
		fontSize: 18,
		fontWeight: "500",
	},
	calendar: {
		margin: 10,
		padding: 10,
		borderWidth: 1,
		borderColor: "#00adf5",
		borderRadius: 10,
	},
});
