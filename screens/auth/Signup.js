import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
} from "react-native";
import SelectRole from "./SelectRole";
import { signup } from "./api-auth";

const Signup = ({ navigation }) => {
  const ROLES = {
    DOCTOR: "Doctor",
    PATIENT: "Patient",
  };

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    practice_number: "",
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

  const handleSignup = () => {
    setFormValues({ ...formValues, loading: true });
    let userType = roleValues.isDoctor ? "doctors" : "patients";
    const user = {
      firstName: formValues.firstName || undefined,
      lastName: formValues.lastName || undefined,
      email: formValues.email || undefined,
      phoneNumber: formValues.phoneNumber || undefined,
      password: formValues.password || undefined,
      role: roleValues.isDoctor ? ROLES.DOCTOR : ROLES.PATIENT,
      practice_number: roleValues.isDoctor
        ? formValues.practice_number
        : undefined,
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

  return (
    <View style={styles.container}>
      <View style={styles.loginTop}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../../assets/logo.jpg")}
        />
      </View>
      <View style={styles.loginForm}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="First Name"
          placeholderTextColor="#fff"
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
          value={formValues.lastName}
          onChangeText={(val) =>
            setFormValues({ ...formValues, lastName: val })
          }
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#fff"
          value={formValues.email}
          onChangeText={(val) => setFormValues({ ...formValues, email: val })}
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
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#fff"
          value={formValues.password}
          onChangeText={(val) =>
            setFormValues({ ...formValues, password: val })
          }
        />
        <SelectRole roleValues={roleValues} setRoleValues={setRoleValues} />

        {roleValues.isDoctor && (
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Practice Number"
            placeholderTextColor="#fff"
            value={formValues.practice_number}
            onChangeText={(val) =>
              setFormValues({ ...formValues, practice_number: val })
            }
          />
        )}
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
      </View>
      <View style={styles.signupTextView}>
        <Text style={styles.signupText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signupButton}>Signin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

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
