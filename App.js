import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";

import WelcomeScreen from "./screens/welcomeScreen/WelcomeScreen";
import TabNavigator from "./navigator/TabNavigator";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(null);

  useEffect(() => {
    checkFirstTime();
  });

  const checkFirstTime = async () => {
    const show = await AsyncStorage.getItem("firstTime");
    if (show) {
      setShowWelcome(false);
    } else {
      setShowWelcome(true);
    }
  };

  const setFirstTime = async () => {
    try {
      await AsyncStorage.setItem("firstTime", "true");
      setShowWelcome(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (showWelcome === false) {
    return <TabNavigator />;
  } else if (showWelcome === null) {
    return null;
  } else {
    return <WelcomeScreen done={setFirstTime} />;
  }
}
