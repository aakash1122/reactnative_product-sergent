import React, { useState } from "react";

import WelcomeScreen from "./screens/welcomeScreen/WelcomeScreen";
import TabNavigator from "./navigator/TabNavigator";
import axios from "axios";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  return showWelcome ? (
    <WelcomeScreen done={setShowWelcome} />
  ) : (
    <TabNavigator />
  );
}
