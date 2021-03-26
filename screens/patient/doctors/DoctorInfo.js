import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import AuthContext from "../../../context/AuthContext";
import { doctorProfile } from "../api-patient";
import DoctorInfoHeader from "../../../components/DoctorInfoHeader";
import NewAppointment from "./NewAppointment";

const DoctorInfo = ({ route }) => {
	const {
		state: { auth },
	} = useContext(AuthContext);
	const { doctorId } = route.params;

	const [doctor, setDoctor] = useState({});
	const [fetching, setFetching] = useState(true);
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		doctorProfile({ doctorId: doctorId }, { token: auth?.token }).then(
			(data) => {
				setFetching(false);
				if (data && data.error) {
					console.log(data.error);
				} else {
					setDoctor(data);
				}
			}
		);
	}, [doctorId]);

	return (
		<View style={styles.container}>
			{fetching ? (
				<View style={styles.loading}>
					<ActivityIndicator size="small" color="black" />
				</View>
			) : (
				<DoctorInfoHeader setOpenModal={setOpenModal} doctor={doctor} />
			)}
			<NewAppointment openModal={openModal} setOpenModal={setOpenModal} />
		</View>
	);
};

export default DoctorInfo;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	loading: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	userInfoSection: {
		paddingHorizontal: 20,
		paddingVertical: 20,
		marginBottom: 25,
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
	},
	avatar: {
		width: 100,
		height: 120,
		borderRadius: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: "600",
		color: "#fff",
	},
	caption: {
		fontSize: 14,
		fontWeight: "500",
		color: "#fff",
		marginTop: 8,
	},
	rating: {
		paddingVertical: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	ratingText: {
		marginLeft: 3,
		fontWeight: "600",
	},
	actions: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 15,
	},

	actionButtonText: {
		color: "#fff",
	},
});
