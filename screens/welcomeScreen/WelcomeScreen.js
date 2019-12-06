import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "somethun",
    title: "Product Sergent",
    text: "Search any product to check authenticity",
    icon: "search",
    backgroundColor: "#6c5ce7"
  },
  {
    key: "somethun-dos",
    title: "Product Sergent",
    text: "Get the right product",
    icon: "check-circle",
    backgroundColor: "#ff6b81"
  }
];

export default class WelcomeScreen extends React.Component {
  _renderItem = item => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignContent: "center",
          backgroundColor: item.item.backgroundColor
        }}
      >
        <Text style={styles.title}>{item.item.title}</Text>
        <FontAwesome
          name={item.item.icon}
          color="#dfe6e9"
          size={180}
          style={{
            backgroundColor: "transparent",
            alignSelf: "center"
          }}
        />
        <Text style={styles.text}>{item.item.text}</Text>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: "transparent" }}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <TouchableNativeFeedback
        onPress={() => {
          this.props.done(false);
        }}
      >
        <View style={styles.buttonCircle} onPress>
          <Ionicons
            name="md-checkmark"
            color="rgba(255, 255, 255, .9)"
            size={24}
            style={{ backgroundColor: "transparent" }}
          />
        </View>
      </TouchableNativeFeedback>
    );
  };
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "space-around",
    alignContent: "center"
  },
  title: {
    color: "#FFF",
    fontSize: 27,
    textAlign: "center",
    fontWeight: "800"
  },
  text: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "center"
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
