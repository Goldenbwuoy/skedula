import React from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import {
	MORNING_TIMES,
	AFTERNOON_TIMES,
	MORNING_WORKING_HOURS,
	AFTERNOON_WORKING_HOURS,
	filteredWorkingHours,
} from "../../../constants/constants";

const SelectTime = ({ timeValues, setTimeValues, setWorkingHours }) => {
	const handleSlideRight = () => {
		setTimeValues({ ...timeValues, active: 1 });
		setWorkingHours({
			times: filteredWorkingHours(
				AFTERNOON_TIMES,
				AFTERNOON_WORKING_HOURS.start,
				AFTERNOON_WORKING_HOURS.end
			),
		});
		Animated.spring(timeValues.translateX, {
			toValue: timeValues.xTabTwo,
			duration: 100,
			useNativeDriver: true,
		}).start();
	};
	const handleSlideLeft = () => {
		setTimeValues({ ...timeValues, active: 0 });
		setWorkingHours({
			times: filteredWorkingHours(
				MORNING_TIMES,
				MORNING_WORKING_HOURS.start,
				MORNING_WORKING_HOURS.end
			),
		});
		Animated.spring(timeValues.translateX, {
			toValue: timeValues.xTabOne,
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
					color: "#00adf5",
					fontSize: 16,
					fontWeight: "600",
					marginBottom: 10,
				}}
			>
				Choose Time
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
						backgroundColor: "#00adf5",
						borderRadius: 10,
						transform: [
							{
								translateX: timeValues?.translateX,
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
						borderColor: "#00adf5",
						borderRadius: 10,
						borderRightWidth: 0,
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
					}}
					onLayout={(event) =>
						setTimeValues({
							...timeValues,
							xTabOne: event.nativeEvent.layout.x,
						})
					}
					onPress={handleSlideLeft}
				>
					<Text
						style={{
							color: timeValues.active === 0 ? "#fff" : "#00adf5",
							fontWeight: "600",
						}}
					>
						Morning
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						borderWidth: 1,
						borderColor: "#00adf5",
						borderRadius: 10,
						borderLeftWidth: 0,
						borderTopLeftRadius: 0,
						borderBottomLeftRadius: 0,
					}}
					onLayout={(event) =>
						setTimeValues({
							...timeValues,
							xTabTwo: event.nativeEvent.layout.x,
						})
					}
					onPress={handleSlideRight}
				>
					<Text
						style={{
							color: timeValues.active === 1 ? "#fff" : "#00adf5",
							fontWeight: "600",
						}}
					>
						Afternoon
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SelectTime;
