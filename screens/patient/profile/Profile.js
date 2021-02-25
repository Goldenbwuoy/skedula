import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AuthContext from "../../../context/AuthContext";
import ProfileContext from "../../../context/ProfileContext";
import { AUTH_ACTIONS } from "../../../context/reducers/authReducer";
import { signOut } from "../../auth/api-auth";

const Profile = () => {
  const { colors } = useTheme();
  const { state, dispatch } = useContext(AuthContext);
  const { profileState } = useContext(ProfileContext);

  const handleSignOut = async () => {
    try {
      await signOut();
      dispatch({ type: AUTH_ACTIONS.SIGN_OUT });
    } catch (err) {
      console.log("failed to signout");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Image
            style={styles.avatar}
            source={require("../../../assets/musk.png")}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
              {`${profileState.profile?.firstName} ${profileState.profile?.lastName}`}
            </Text>
            <Text style={styles.caption}>{state.auth?.user.email}</Text>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Ionicons name="location-outline" size={24} color="white" />
          <Text style={{ color: "#fff", marginLeft: 20 }}>Zhejiang, China</Text>
        </View>
        <View style={styles.row}>
          <AntDesign name="phone" size={24} color="white" />
          <Text
            style={{ color: "#fff", marginLeft: 20 }}
          >{`${profileState.profile?.phoneNumber}`}</Text>
        </View>
        <View style={styles.row}>
          <MaterialIcons name="email" size={24} color="white" />
          <Text style={{ color: "#fff", marginLeft: 20 }}>
            {state.auth?.user.email}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: colors.card,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
        onPress={handleSignOut}
      >
        <Ionicons name="ios-exit-outline" size={24} color="white" />
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: colors.card,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <Ionicons name="settings-sharp" size={24} color="white" />
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    margin: 15,
  },
});
