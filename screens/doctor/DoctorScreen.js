import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import HomeStack from "./home/HomeStack";
import AppointmentsStack from "./appointments/AppointmentsStack";
import ProfileStack from "./profile/ProfileStack";
import AuthContext from "../../context/AuthContext";
import ProfileContext from "../../context/ProfileContext";
import { getProfile } from "./api-doctor";
import { PROFILE_ACTIONS } from "../../context/reducers/profileReducer";

const Tabs = createBottomTabNavigator();

const PatientHome = () => {
  const { state } = useContext(AuthContext);
  const { profileDispatch } = useContext(ProfileContext);

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
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Tabs.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#009387",
        inactiveTintColor: "rgba(255, 255, 255, 0.7)",
        style: {
          backgroundColor: "#1c313a",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Appointments"
        component={AppointmentsStack}
        options={{
          tabBarLabel: "Appointments",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="date" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
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
