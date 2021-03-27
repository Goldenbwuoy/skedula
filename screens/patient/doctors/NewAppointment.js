import React, { useContext, useEffect, useState } from "react";
import {
	View,
	Text,
	Modal,
	StyleSheet,
	TouchableOpacity,
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
	filteredWorkingHours,
} from "../../../constants/constants";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native";

const NewAppointment = ({ openModal, setOpenModal, doctor }) => {
	const { state } = useContext(AuthContext);
	const { profileState, profileDispatch } = useContext(ProfileContext);
	const today = new Date();
	const [date, setDate] = useState("");
	const [loading, setLoading] = useState(false);
	const [workingHours, setWorkingHours] = useState({
		times: filteredWorkingHours(
			MORNING_TIMES,
			MORNING_WORKING_HOURS.start,
			MORNING_WORKING_HOURS.end
		),
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

	const handleCreate = async () => {
		setLoading(!loading);
		const appointment = {
			patient: profileState.profile?._id,
			doctor: doctor._id,
			date: date,
			start_time: selectedTime,
		};
		createAppointment({ token: state.auth?.token }, appointment)
			.then((data) => {
				setLoading(!loading);
				if (data && data.error) {
					console.log(data.error);
				} else {
					profileDispatch({
						type: PROFILE_ACTIONS.ADD_APPOINTMENT,
						appointment: { ...data, doctor: doctor },
					});
					setOpenModal(!openModal);
				}
			})
			.catch((error) => {
				setLoading(!loading);
				console.log(error);
			});
	};

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
		<Modal
			onRequestClose={() => {
				setOpenModal(!openModal);
			}}
			animationType="slide"
			transparent={true}
			visible={openModal}
		>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={() => setOpenModal(!openModal)}>
						<Text style={styles.headerText}>Cancel</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={handleCreate}
						disabled={!selectedTime || !date}
					>
						{loading ? (
							<ActivityIndicator
								style={{ marginHorizontal: 15 }}
								size="small"
								color="#01478F"
							/>
						) : (
							<Text style={styles.headerText}>Submit</Text>
						)}
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
						setWorkingHours={setWorkingHours}
					/>
					<FlatList
						data={workingHours.times}
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
