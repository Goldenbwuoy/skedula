import React from "react";
import { View, Text, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.replace("Login")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../../assets/onboarding-img1.png")} />,
          title: "Connect With Doctors",
          subtitle: "Schedule appointments with doctors in no time",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../../assets/onboarding-img2.png")} />,
          title: "Connect with Patients",
          subtitle:
            "Scheduling appointments with your patients has never been easier",
        },
        {
          backgroundColor: "#e9bcbe",
          image: <Image source={require("../../assets/onboarding-img3.png")} />,
          title: "Connect with Pharmacies",
          subtitle:
            "The Pharmacies around the world brought to your fingertips",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
