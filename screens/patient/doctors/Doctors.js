import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { fetchDoctors } from "../api-patient";
import LoadingScreen from "../../shared/LoadingScreen";

const Search = () => {
  return (
    <View>
      <View style={styles.wrapperInput}>
        <AntDesign name="search1" size={18} color="gray" />
        <TextInput
          style={styles.inputText}
          placeholder="Search Doctors"
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

const Rating = ({ rating }) => {
  return (
    <View style={styles.rating}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          if (rating > i) {
            return (
              <AntDesign
                key={i}
                name="star"
                color="#FA8D00"
                style={{ marginRight: 5 }}
              />
            );
          }
          return <AntDesign key={i} name="staro" style={{ marginRight: 5 }} />;
        })}
    </View>
  );
};

const DoctorCard = ({ doctor }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardBody}>
        <View style={styles.cardBodyTop}>
          <Image
            style={styles.cardAvatar}
            source={require("../../../assets/doctor.jpg")}
          />
          <View style={styles.cardLeftSide}>
            <Text style={styles.cardName}>
              Dr {`${doctor.firstName} ${doctor.lastName}`}
            </Text>
            <Text style={styles.cardTime}>Affiliations</Text>
            <Text style={styles.cardAddress}>Specialty</Text>
            <Text style={styles.cardAddress}>Address</Text>
            <Rating rating={4} />
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.btnBookText}>Book Visit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.chatButton}>
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={24}
                  color="#1c313a"
                />
                <Text style={styles.chatText}>chat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctors()
      .then((data) => {
        setLoading(false);
        if (data && data.error) {
          console.log(data.error);
        } else {
          setDoctors(data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) return <LoadingScreen />;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Search />
        {doctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
  wrapperInput: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
    marginHorizontal: 8,
  },
  inputText: {
    padding: 10,
    flex: 1,
  },
  cardContainer: {
    padding: 15,
    paddingBottom: 0,
  },
  cardBody: {
    padding: 15,
    backgroundColor: "#fff",
    marginTop: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardBodyTop: {
    flexDirection: "row",
  },
  cardAvatar: {
    height: 60,
    width: 60,
    backgroundColor: "gray",
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#1c313a",
  },
  cardLeftSide: {
    paddingHorizontal: 10,
    flex: 1,
  },
  tag: {
    color: "#B066A4",
  },
  cardName: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardTime: {
    color: "#222",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
  },
  cardAddress: {
    color: "gray",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 5,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookButton: {
    borderWidth: 1,
    borderColor: "#1c313a",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 15,
  },
  btnBookText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1c313a",
  },
  rating: {
    flexDirection: "row",
    marginTop: 5,
  },
  chatButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
