import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import SelectRole from "./SelectRole";
import { MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const LoginDetails = (props) => {
  const {
    formValues,
    setFormValues,
    roleValues,
    setRoleValues,
    nextStep,
    navigation,
  } = props;
  return (
    <Animatable.View
      animation="fadeIn"
      duration={1500}
      style={styles.container}
    >
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
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="#fff"
          value={formValues.email}
          onChangeText={(val) => setFormValues({ ...formValues, email: val })}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#fff"
          autoCapitalize="none"
          value={formValues.password}
          onChangeText={(val) =>
            setFormValues({ ...formValues, password: val })
          }
        />
        <SelectRole roleValues={roleValues} setRoleValues={setRoleValues} />

        <TouchableOpacity
          disabled={!formValues.email || !formValues.password}
          onPress={nextStep}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Next</Text>
          <MaterialIcons name="navigate-next" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.signupTextView}>
        <Text style={styles.signupText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signupButton}>Signin</Text>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};

export default LoginDetails;

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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
});
