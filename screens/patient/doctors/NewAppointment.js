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

const DATA = [
	{
		// id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "First Item",
	},
	{
		// id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Second Item",
	},
	{
		// id: "58694a0f-3da1-471f-bd96-145571e29d72",
		title: "Third Item",
	},
];

const NewAppointment = ({ openModal, setOpenModal }) => {
	const today = new Date();
	const [date, setDate] = useState("");
	const [timeOfDay, setTimeOfDay] = useState({
		times: MORNING_TIMES,
		workingHours: MORNING_WORKING_HOURS,
	});
	const [selectedTime, setSelectedTime] = useState("");
	const [timeValues, setTimeValues] = useState({
		active: 0,
		xTabOne: 0,
		xTabTwo: 0,
		translateX: new Animated.Value(0),
	});

	const selectDay = (day) => {
		setDate(day.dateString);
	};

	console.log(selectedTime);
	console.log(date);

	const handleCreate = () => {};

	const renderItem = ({ item }) => (
		<TouchableOpacity
			onPress={() => setSelectedTime(item.time)}
			style={[
				styles.item,
				{
					backgroundColor:
						selectedTime === item.time ? "#00adf5" : "#fff",
				},
			]}
		>
			<Text
				style={[
					styles.itemText,
					{ color: selectedTime === item.time ? "#fff" : "#00adf5" },
				]}
			>
				{item.time}
			</Text>
		</TouchableOpacity>
	);

	return (
		<Modal animationType="slide" transparent={true} visible={openModal}>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => setOpenModal(false)}>
						<Text style={styles.headerText}>Cancel</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text style={styles.headerText}>Submit</Text>
					</TouchableOpacity>
				</View>
				<View>
					<View style={styles.calendar}>
						<Calendar
							minDate={today}
							onDayPress={(day) => selectDay(day)}
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
					<FlatList
						data={timeOfDay.times}
						contentContainerStyle={styles.grid}
						numColumns={4}
						renderItem={renderItem}
						keyExtractor={(item) => item.time}
					/>
				</View>
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
		marginTop: 3,
		marginHorizontal: 10,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: "#00adf5",
		borderRadius: 10,
	},
	item: {
		marginHorizontal: 5,
		marginVertical: 4,
		width: 70,
		padding: 8,
		borderRadius: 5,
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#00adf5",
	},
	grid: {
		marginBottom: 32,
		alignItems: "center",
	},
	itemText: {
		color: "#00adf5",
	},
});
