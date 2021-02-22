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
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (err) {
    console.log(err);
  }
};

const signOut = async () => {
  try {
    await AsyncStorage.removeItem("user");
  } catch (err) {
    console.log(err);
  }
};

export { signin, signOut };
