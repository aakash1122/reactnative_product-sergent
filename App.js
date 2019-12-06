import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import WelcomeScreen from "./screens/welcomeScreen/WelcomeScreen";
import TabNavigator from "./navigator/TabNavigator";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  return showWelcome ? (
    <WelcomeScreen done={setShowWelcome} />
  ) : (
    <TabNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
