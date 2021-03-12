import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import HomeStack from "./home/HomeStack";
import DoctorsStack from "./doctors/DoctorsStack";
import AppointmentsStack from "./appointments/AppointmentsStack";
import ProfileStack from "./profile/ProfileStack";
import AuthContext from "../../context/AuthContext";
import ProfileContext from "../../context/ProfileContext";
import { getProfile, appointmentsByPatient } from "./api-patient";
import { PROFILE_ACTIONS } from "../../context/reducers/profileReducer";
import LoadingScreen from "../shared/LoadingScreen";
import MainTabs from "./MainTabs";

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const PatientHome = () => {
	const { state } = useContext(AuthContext);
	const { profileDispatch } = useContext(ProfileContext);
	const [loading, setLoading] = useState(true);
	const { colors } = useTheme();

	useEffect(() => {
		state && getPatientProfile();
	}, [state]);

	const getPatientProfile = () => {
		getProfile(
			{
				patientAccount: state.auth?.user._id,
			},
			{ token: state.auth?.token }
		)
			.then((patient) => {
				setLoading(false);
				if (patient && patient.error) {
					console.log("Failed to fetch profile " + patient.error);
				} else {
					profileDispatch({
						type: PROFILE_ACTIONS.SET_PROFILE,
						profile: patient,
					});
					appointmentsByPatient(
						{
							patientId: patient._id,
						},
						{ token: state.auth?.token }
					).then((appointments) => {
						setLoading(false);
						if (appointments && appointments.error) {
							console.log(
								"Failed to fetch appointments " +
									appointments.error
							);
						} else {
							profileDispatch({
								type: PROFILE_ACTIONS.SET_APPOINTMENTS,
								appointments: appointments,
							});
						}
					});
				}
			})
			.catch((err) => console.log(err));
	};

	if (loading) {
		return <LoadingScreen />;
	}

	return (
		<Drawer.Navigator>
			<Drawer.Screen name="HomeDrawer" component={MainTabs} />
		</Drawer.Navigator>
	);

	// return (
	// 	<Tabs.Navigator
	// 		initialRouteName="Home"
	// 		tabBarOptions={{
	// 			activeTintColor: "#009387",
	// 			inactiveTintColor: "rgba(255, 255, 255, 0.7)",
	// 			style: {
	// 				backgroundColor: colors.card,
	// 			},
	// 		}}
	// 	>
	// 		<Tabs.Screen
	// 			name="Home"
	// 			component={HomeStack}
	// 			options={{
	// 				tabBarLabel: "Home",
	// 				tabBarIcon: ({ color, size }) => (
	// 					<FontAwesome name="home" size={size} color={color} />
	// 				),
	// 			}}
	// 		/>

	// 		<Tabs.Screen
	// 			name="Doctors"
	// 			component={DoctorsStack}
	// 			options={{
	// 				tabBarLabel: "Doctors",
	// 				tabBarIcon: ({ color, size }) => (
	// 					<Fontisto name="doctor" size={size} color={color} />
	// 				),
	// 			}}
	// 		/>

	// 		<Tabs.Screen
	// 			name="Appointments"
	// 			component={AppointmentsStack}
	// 			options={{
	// 				tabBarLabel: "Appointments",
	// 				tabBarIcon: ({ color, size }) => (
	// 					<Fontisto name="date" size={size} color={color} />
	// 				),
	// 			}}
	// 		/>
	// 		<Tabs.Screen
	// 			name="Profile"
	// 			component={ProfileStack}
	// 			options={{
	// 				tabBarLabel: "Profile",
	// 				tabBarIcon: ({ color, size }) => (
	// 					<Fontisto name="person" size={size} color={color} />
	// 				),
	// 			}}
	// 		/>
	// 	</Tabs.Navigator>
	// );
};

export default PatientHome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
