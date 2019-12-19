import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";

import WelcomeScreen from "./screens/welcomeScreen/WelcomeScreen";
import TabNavigator from "./navigator/TabNavigator";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(
    () => async () => {
      const show = await AsyncStorage.getItem("firstTime");
      if (show !== null) {
        setShowWelcome(false);
      }
    },
    showWelcome
  );

  const setFirstTime = async () => {
    try {
      await AsyncStorage.setItem("firstTime", "true");
      setShowWelcome(false);
    } catch (error) {
      console.log(error);
    }
  };

  return showWelcome ? <WelcomeScreen done={setFirstTime} /> : <TabNavigator />;
}
