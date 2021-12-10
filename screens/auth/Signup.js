import React, { useState } from "react";
import { Animated } from "react-native";
import { signup } from "./api-auth";
import LoginDetails from "./LoginDetails";
import PersonalDetails from "./PersonalDetails";

const Signup = ({ navigation }) => {
  const ROLES = {
    DOCTOR: "Doctor",
    PATIENT: "Patient",
  };

  const [formValues, setFormValues] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    loading: false,
    error: "",
  });
  const [roleValues, setRoleValues] = useState({
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    isDoctor: false,
  });

  const nextStep = () => {
    setFormValues({ ...formValues, step: formValues.step + 1 });
  };

  const previousStep = () => {
    setFormValues({ ...formValues, step: formValues.step - 1 });
  };

  const handleSignup = () => {
    setFormValues({ ...formValues, loading: true, error: "" });
    let userType = roleValues.isDoctor ? "doctors" : "patients";
    const user = {
      firstName: formValues.firstName || undefined,
      lastName: formValues.lastName || undefined,
      email: formValues.email || undefined,
      phoneNumber: formValues.phoneNumber || undefined,
      password: formValues.password || undefined,
      role: roleValues.isDoctor ? ROLES.DOCTOR : ROLES.PATIENT,
    };
    signup(userType, user).then((data) => {
      setFormValues({ ...formValues, loading: false, error: "" });
      if (data && data.error) {
        console.log(data.error);
        setFormValues({ ...formValues, error: data.error });
      } else {
        navigation.navigate("Login");
      }
    });
  };

  switch (formValues.step) {
    case 1:
      return (
        <LoginDetails
          formValues={formValues}
          setFormValues={setFormValues}
          roleValues={roleValues}
          setRoleValues={setRoleValues}
          nextStep={nextStep}
          navigation={navigation}
        />
      );

    case 2:
      return (
        <PersonalDetails
          formValues={formValues}
          setFormValues={setFormValues}
          handleSignup={handleSignup}
          previousStep={previousStep}
        />
      );
  }
};

export default Signup;
