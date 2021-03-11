import React, { useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	Image,
	SafeAreaView,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthContext from "../../../context/AuthContext";
import ProfileContext from "../../../context/ProfileContext";
import { AUTH_ACTIONS } from "../../../context/reducers/authReducer";
import { signOut } from "../../auth/api-auth";
import ListItem from "react-native-elements/dist/list/ListItem";
import ProfileHeader from "./ProfileHeader";
import { ScrollView } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
	const { colors } = useTheme();
	const { state, dispatch } = useContext(AuthContext);
	const { profileState } = useContext(ProfileContext);

	const handleSignOut = async () => {
		try {
			await signOut();
			dispatch({ type: AUTH_ACTIONS.SIGN_OUT });
		} catch (err) {
			console.log("failed to signout");
		}
	};
	return (
		<View style={styles.container}>
			<ProfileHeader profileState={profileState} state={state} />

			<ScrollView>
				<TouchableOpacity
					onPress={() => navigation.navigate("EditProfile")}
				>
					<ListItem topDivider bottomDivider>
						<Ionicons
							name="settings-sharp"
							size={24}
							color="grey"
						/>
						<ListItem.Content>
							<ListItem.Title>Settings</ListItem.Title>
						</ListItem.Content>
						<ListItem.Chevron />
					</ListItem>
				</TouchableOpacity>
				<TouchableOpacity>
					<ListItem bottomDivider>
						<AntDesign name="medicinebox" size={24} color="grey" />
						<ListItem.Content>
							<ListItem.Title>Prescriptions</ListItem.Title>
						</ListItem.Content>
						<ListItem.Chevron />
					</ListItem>
				</TouchableOpacity>
				<TouchableOpacity>
					<ListItem bottomDivider>
						<MaterialCommunityIcons
							name="doctor"
							size={24}
							color="grey"
						/>
						<ListItem.Content>
							<ListItem.Title>My Doctors</ListItem.Title>
						</ListItem.Content>
						<ListItem.Chevron />
					</ListItem>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleSignOut}>
					<ListItem bottomDivider>
						<Ionicons
							name="ios-exit-outline"
							size={24}
							color="grey"
						/>
						<ListItem.Content>
							<ListItem.Title>Logout</ListItem.Title>
						</ListItem.Content>
						<ListItem.Chevron />
					</ListItem>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},

	buttonText: {
		color: "grey",
		margin: 15,
	},
});
