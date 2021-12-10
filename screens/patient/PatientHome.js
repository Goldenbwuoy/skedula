import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AuthContext from "../../context/AuthContext";
import ProfileContext from "../../context/ProfileContext";
import { getProfile, appointmentsByPatient } from "./api-patient";
import { PROFILE_ACTIONS } from "../../context/reducers/profileReducer";
import LoadingScreen from "../shared/LoadingScreen";
import MainTabs from "./MainTabs";
import { DrawerContent } from "./DrawerContent";
import ProfileStack from "./profile/ProfileStack";

const Drawer = createDrawerNavigator();

const PatientHome = () => {
	const { state } = useContext(AuthContext);
	const { profileDispatch } = useContext(ProfileContext);
	const [loading, setLoading] = useState(true);

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
		<Drawer.Navigator
			drawerContent={(props) => <DrawerContent {...props} />}
		>
			<Drawer.Screen name="HomeDrawer" component={MainTabs} />
			<Drawer.Screen name="ProfileStack" component={ProfileStack} />
		</Drawer.Navigator>
	);
};

export default PatientHome;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
