import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginTop}>
        <Image
          style={{ width: 80, height: 80 }}
          source={require("../../assets/logo.jpg")}
        />
        <Text style={styles.logoText}>Welcome to the World</Text>
      </View>
      <View style={styles.loginForm}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#fff"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupTextView}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <Text style={styles.signupButton}>Signup</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
