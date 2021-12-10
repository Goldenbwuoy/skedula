import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { MaterialIcons } from "@expo/vector-icons";

const PersonalDetails = (props) => {
	const { formValues, setFormValues, handleSignup, previousStep } = props;
	return (
		<Animatable.View animation="fadeInRight" style={styles.container}>
			<View style={styles.loginTop}>
				<Image
					style={{ width: 60, height: 60, borderRadius: 60 }}
					source={require("../../assets/logo.jpg")}
				/>
			</View>
			<View style={styles.loginForm}>
				<TextInput
					style={styles.inputBox}
					underlineColorAndroid="rgba(0,0,0,0)"
					placeholder="First Name"
					placeholderTextColor="#fff"
					autoCapitalize="none"
					value={formValues.firstName}
					onChangeText={(val) =>
						setFormValues({ ...formValues, firstName: val })
					}
				/>
				<TextInput
					style={styles.inputBox}
					underlineColorAndroid="rgba(0,0,0,0)"
					placeholder="Last Name"
					placeholderTextColor="#fff"
					autoCapitalize="none"
					value={formValues.lastName}
					onChangeText={(val) =>
						setFormValues({ ...formValues, lastName: val })
					}
				/>

				<TextInput
					style={styles.inputBox}
					underlineColorAndroid="rgba(0,0,0,0)"
					placeholder="Phone Number"
					placeholderTextColor="#fff"
					value={formValues.phoneNumber}
					onChangeText={(val) =>
						setFormValues({ ...formValues, phoneNumber: val })
					}
				/>

				{formValues.error !== "" && (
					<Text style={styles.errorText}>{formValues.error}</Text>
				)}
				<TouchableOpacity
					disabled={formValues.loading}
					style={styles.button}
					onPress={handleSignup}
				>
					{formValues.loading ? (
						<ActivityIndicator color="white" />
					) : (
						<Text style={styles.buttonText}>Sign Up</Text>
					)}
				</TouchableOpacity>
				<TouchableOpacity
					onPress={previousStep}
					disabled={formValues.loading}
					style={[
						styles.button,
						{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						},
					]}
				>
					<MaterialIcons
						name="navigate-before"
						size={24}
						color="white"
					/>
					<Text style={styles.buttonText}>Back</Text>
				</TouchableOpacity>
			</View>
		</Animatable.View>
	);
};

export default PersonalDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#455a64",
	},
	loginTop: {
		flexGrow: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	logoText: {
		fontSize: 22,
		color: "rgba(255, 255, 255, 0.7)",
		marginVertical: 10,
	},
	loginForm: {
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	inputBox: {
		width: 300,
		backgroundColor: "rgba(255,255,255,0.3)",
		borderRadius: 25,
		padding: 12,
		fontSize: 16,
		color: "#fff",
		marginVertical: 15,
		fontFamily: "Montserrat_300Light",
	},
	button: {
		backgroundColor: "#1c313a",
		width: 300,
		borderRadius: 25,
		marginVertical: 15,
		paddingVertical: 10,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "900",
		color: "#fff",
		textAlign: "center",
		fontFamily: "Montserrat_700Bold",
	},
	signupTextView: {
		flexGrow: 1,
		alignItems: "flex-end",
		justifyContent: "center",
		paddingVertical: 16,
		flexDirection: "row",
	},
	signupText: {
		color: "rgba(255,255,255,0.7)",
		fontSize: 16,
	},
	signupButton: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "500",
	},
	errorText: {
		color: "rgb(254,92,92)",
		fontSize: 15,
	},
});
