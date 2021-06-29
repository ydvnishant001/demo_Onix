import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const About = () => {
  return (
    <View style={styles.details}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Text style={styles.heading}>About</Text>
        <View>
          <Text style={styles.text}>Current Title</Text>
          <TextInput underlineColorAndroid="#eaeaea" style={styles.input} />
        </View>
        <View>
          <Text style={styles.text}>Current Company</Text>
          <TextInput underlineColorAndroid="#eaeaea" style={styles.input} />
        </View>
        <View>
          <Text style={styles.text}>Total Years of Experience</Text>
          <TextInput underlineColorAndroid="#eaeaea" style={styles.input} />
        </View>
        <View>
          <Text style={styles.text}>Location</Text>
          <TextInput underlineColorAndroid="#eaeaea" style={styles.input} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    margin: 30,
    justifyContent: "space-between",
    right: 5,
    paddingRight: 60,
    paddingLeft: 20,
    padding: 30,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  text: {
    fontSize: 15,
    margin: 15,
    width: 250,
  },
  heading: {
    fontSize: 23,
    margin: 15,
    fontWeight: "bold",
    width: 250,
  },
  input: {
    marginLeft: 15,
    width: 250,
  },
});

export default About;
