import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Paragraph, Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthContext from "../../context/AuthContext";
import ProfileContext from "../../context/ProfileContext";
import { AUTH_ACTIONS } from "../../context/reducers/authReducer";
import { signOut } from "../auth/api-auth";

export function DrawerContent(props) {
	const { state, dispatch } = useContext(AuthContext);
	const {
		profileState: { profile, appointments },
	} = useContext(ProfileContext);

	const handleSignOut = async () => {
		try {
			await signOut();
			dispatch({ type: AUTH_ACTIONS.SIGN_OUT });
		} catch (err) {
			console.log("failed to signout");
		}
	};

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.userInfoSection}>
				<View style={{ flexDirection: "row", marginTop: 15 }}>
					<Avatar.Image
						source={require("../../assets/musk.png")}
						size={50}
					/>
					<View
						style={{
							marginLeft: 15,
							flexDirection: "column",
						}}
					>
						<Title
							style={styles.title}
						>{`${profile?.firstName} ${profile?.lastName}`}</Title>
						<Caption style={styles.caption}>
							{state.auth?.user.email}
						</Caption>
					</View>
				</View>
				<View style={styles.row}>
					<View style={styles.section}>
						<Paragraph style={[styles.paragraph, styles.section]}>
							{appointments?.length}
						</Paragraph>
						<Caption style={styles.section}>
							Upcoming Appointments
						</Caption>
					</View>
					<View style={styles.section}>
						{/* <Paragraph style={[styles.paragraph, styles.section]}>
							30
						</Paragraph>
						<Caption style={styles.section}>Followers</Caption> */}
					</View>
				</View>
			</View>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon
									name="account-outline"
									color={color}
									size={size}
								/>
							)}
							label="Profile"
							labelStyle={styles.drawerLabel}
							onPress={() => props.navigation.navigate("Profile")}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<AntDesign
									name="medicinebox"
									size={size}
									color={color}
								/>
							)}
							label="Prescriptions"
							labelStyle={styles.drawerLabel}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<MaterialCommunityIcons
									name="doctor"
									size={size}
									color={color}
								/>
							)}
							label="My Doctors"
							labelStyle={styles.drawerLabel}
						/>
						<DrawerItem
							icon={({ color, size }) => (
								<Icon
									name="cog-outline"
									color={color}
									size={size}
								/>
							)}
							label="Settings"
							labelStyle={styles.drawerLabel}
						/>
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.bottonDrawerSection}>
				<DrawerItem
					icon={({ color, size }) => (
						<Icon name="exit-to-app" color={color} size={size} />
					)}
					label="Sign Out"
					labelStyle={styles.drawerLabel}
					onPress={handleSignOut}
				/>
			</Drawer.Section>
		</View>
	);
}

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
		paddingBottom: 10,
		marginTop: 30,
		borderBottomWidth: 1,
		borderBottomColor: "#fff",
	},
	title: {
		fontSize: 16,
		marginTop: 3,
		fontWeight: "bold",
		color: "#fff",
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
		color: "#fff",
	},
	row: {
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	section: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 15,
		color: "#fff",
	},
	paragraph: {
		fontWeight: "bold",
		marginRight: 15,
	},
	drawerSection: {
		marginTop: 15,
	},
	bottonDrawerSection: {
		marginBottom: 15,
		borderTopColor: "#f4f4f4",
		borderTopWidth: 1,
	},
	drawerLabel: {
		color: "#fff",
	},
});
