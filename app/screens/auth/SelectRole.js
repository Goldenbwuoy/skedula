import React from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";

const SelectRole = ({ roleValues, setRoleValues }) => {
	const handleSlideRight = () => {
		setRoleValues({ ...roleValues, active: 1, isDoctor: true });
		Animated.spring(roleValues.translateX, {
			toValue: roleValues.xTabTwo,
			duration: 100,
			useNativeDriver: true,
		}).start();
	};
	const handleSlideLeft = () => {
		setRoleValues({ ...roleValues, active: 1, isDoctor: false });
		Animated.spring(roleValues.translateX, {
			toValue: roleValues.xTabOne,
			duration: 100,
			useNativeDriver: true,
		}).start();
	};
	return (
		<View
			style={{
				width: 300,
				marginLeft: "auto",
				marginRight: "auto",
				alignItems: "center",
				marginVertical: 15,
			}}
		>
			<Text
				style={{
					color: "#fff",
					fontSize: 16,
					fontWeight: "600",
					marginBottom: 10,
					fontFamily: "Montserrat_300Light",
				}}
			>
				Register As
			</Text>
			<View
				style={{
					flexDirection: "row",
					height: 36,
					position: "relative",
				}}
			>
				<Animated.View
					style={{
						position: "absolute",
						width: "50%",
						height: "100%",
						top: 0,
						left: 0,
						backgroundColor: "rgba(28, 49, 58, 0.5)",
						borderRadius: 10,
						transform: [
							{
								translateX: roleValues?.translateX,
							},
						],
					}}
				/>
				<TouchableOpacity
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						borderWidth: 1,
						borderColor: "rgb(28, 49, 58)",
						borderRadius: 10,
						borderRightWidth: 0,
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
					}}
					onLayout={(event) =>
						setRoleValues({
							...roleValues,
							xTabOne: event.nativeEvent.layout.x,
						})
					}
					onPress={handleSlideLeft}
				>
					<Text
						style={{
							color: "#fff",
							fontFamily: "Montserrat_600SemiBold",
						}}
					>
						Patient
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						borderWidth: 1,
						borderColor: "rgb(28, 49, 58)",
						borderRadius: 10,
						borderLeftWidth: 0,
						borderTopLeftRadius: 0,
						borderBottomLeftRadius: 0,
					}}
					onLayout={(event) =>
						setRoleValues({
							...roleValues,
							xTabTwo: event.nativeEvent.layout.x,
						})
					}
					onPress={handleSlideRight}
				>
					<Text
						style={{
							color: "#fff",
							fontFamily: "Montserrat_600SemiBold",
						}}
					>
						Doctor
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SelectRole;
