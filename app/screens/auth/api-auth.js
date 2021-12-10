import AsyncStorage from "@react-native-community/async-storage";
import axios from "../../axios";

const signin = async (user) => {
  try {
    const response = await axios.post("/api/signin", user);
    await storeUser(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const storeUser = async (user) => {
  try {
    await AsyncStorage.setItem("auth", JSON.stringify(user));
  } catch (err) {
    console.log(err);
  }
};

const signup = async (userType, user) => {
  try {
    const response = await axios.post(`/api/${userType}`, user);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

const signOut = async () => {
  try {
    await AsyncStorage.removeItem("auth");
  } catch (err) {
    console.log(err);
  }
};

export { signin, signOut, signup };
