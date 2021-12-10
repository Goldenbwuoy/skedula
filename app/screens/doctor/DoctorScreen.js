import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import ProfileContext from "../../context/ProfileContext";
import { getProfile, appointmentsByDoctor } from "./api-doctor";
import { PROFILE_ACTIONS } from "../../context/reducers/profileReducer";
import LoadingScreen from "../shared/LoadingScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabs from "./MainTabs";
import { DrawerContent } from "./DrawerContent";
import ProfileStack from "./profile/ProfileStack";

const Drawer = createDrawerNavigator();

const PatientHome = () => {
	const { state } = useContext(AuthContext);
	const { profileDispatch } = useContext(ProfileContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getDoctorProfile();
	}, []);

	const getDoctorProfile = () => {
		getProfile(
			{
				accountId: state.auth?.user._id,
			},
			{ token: state.auth?.token }
		)
			.then((doctor) => {
				if (doctor && doctor.error) {
					console.log("Failed to fetch profile " + doctor.error);
				} else {
					profileDispatch({
						type: PROFILE_ACTIONS.SET_PROFILE,
						profile: doctor,
					});
					appointmentsByDoctor(
						{ doctorId: doctor._id },
						{ token: state.auth?.token }
					).then((appointments) => {
						setLoading(false);
						if (appointments && appointments.error) {
							console.log(
								"Failed to fetch profile " + appointments.error
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
