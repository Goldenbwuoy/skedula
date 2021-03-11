import React from "react";
import { View, Text } from "react-native";
import { withBadge, Icon } from "react-native-elements";

const NotificationsIcon = () => {
	const BadgedIcon = withBadge(5)(Icon);
	return (
		<BadgedIcon
			type="ionicon"
			name="notifications-circle-outline"
			size={24}
			color="white"
		/>
	);
};

export default NotificationsIcon;
