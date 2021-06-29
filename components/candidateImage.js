import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const CandidateImage = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.image}
      source={require("../assets/190703114927-alex-rogers-edited-super-169.jpg")}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={styles.FloatingActionButtonStyle}
      >
        <Ionicons
          name={Platform.OS === "android" ? "menu" : "ios-menu"}
          size={35}
        />
        <Text style={styles.floatName}>Profile</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Alex</Text>
      <Text style={styles.place}>
        <Ionicons
          name={
            Platform.OS === "android" ? "location-sharp" : "ios-location-sharp"
          }
          size={20}
        />
        CA, USA
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: "center",
    alignItems: "center",
    height: 320,
    width: 420,
  },
  title: {
    right: 170,
    top: 80,
    fontSize: 25,
  },
  place: {
    right: 160,
    top: 80,
  },
  FloatingActionButtonStyle: {
    flexDirection: "row",
    position: "absolute",
    width: 160,
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    right: 257,
    top: 50,
    padding: 20,
    margin: 10,
  },
  floatName: {
    fontSize: 25,
  },
});

export default CandidateImage;
