import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import About from "../components/about";
import CandidateImage from "../components/candidateImage";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <CandidateImage />
        <About />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
