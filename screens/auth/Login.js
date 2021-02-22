import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import AuthContext from "../../context/AuthContext";
import { ACTIONS } from "../../context/reducer";
import { signin } from "./api-auth";

const Login = ({ navigation }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    loading: false,
    error: "",
  });
  const { state, dispatch } = useContext(AuthContext);

  const emptyField = !values.email || !values.password;

  const handleSubmit = () => {
    setValues({ ...values, error: "", loading: true });
    const user = {
      email: values.email || undefined,
      password: values.password || undefined,
    };
    signin(user).then((data) => {
      setValues({ ...values, loading: false });
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        dispatch({
          type: ACTIONS.SIGN_IN,
          user: data,
        });
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginTop}>
        <Image
          style={{ width: 80, height: 80 }}
          source={require("../../assets/logo.jpg")}
        />
        {/* <Text style={styles.logoText}>Welcome to the World</Text> */}
      </View>
      <View style={styles.loginForm}>
        <TextInput
          style={styles.inputBox}
          value={values.email}
          autoCapitalize="none"
          onChangeText={(emailValue) =>
            setValues({ ...values, email: emailValue })
          }
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.inputBox}
          value={values.password}
          autoCapitalize="none"
          onChangeText={(passwordValue) =>
            setValues({ ...values, password: passwordValue })
          }
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#fff"
        />
        {values.error !== "" && (
          <Text style={styles.errorText}>{values.error}</Text>
        )}
        <TouchableOpacity
          disabled={values.loading || emptyField}
          onPress={handleSubmit}
          style={styles.button}
        >
          {values.loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.signupTextView}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signupButton}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
