import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Button
} from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import Constants from "expo-constants";
import Styled from "styled-components";

import CompanyCard from "../components/CompanyCard";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Scan Barcode / QRcode"
  };

  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  handleBarCodeScanned = async ({ type, data }) => {
    this.setState({ scanned: true });
    this.props.navigation.navigate("Check", { data: data, type: type });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return (
        <View>
          <Text>No access to camera</Text>;
          <Button
            mode="outlined"
            color="#ff6b81"
            onPress={() => this.getPermissionsAsync()}
          ></Button>
        </View>
      );
    }

    return (
      <View
        style={{
          flex: 1,
          paddingTop: Constants.statusBarHeight,
          backgroundColor: "#fff"
        }}
      >
        <Wrapper>
          <ScannereWrapper>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  width: Dimensions.get("screen").width
                }
              ]}
            />
            {scanned && (
              <Button
                title={"Tap to Scan Again"}
                onPress={() => this.setState({ scanned: false })}
              />
            )}
          </ScannereWrapper>
          <View style={Styles.CompanyWrapper}>
            <Text style={Styles.rc}>Registerd Company</Text>
            <ScrollView
              horizontal={true}
              centerContent={true}
              showsHorizontalScrollIndicator={false}
            >
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
            </ScrollView>
          </View>
        </Wrapper>
      </View>
    );
  }
}
const Wrapper = Styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

const ScannereWrapper = Styled.View`
    flex: 5;
    width: 100%;
    align-self: stretch;
    justify-content: center;
    align-items: stretch;
    padding: 5px;
    overflow: hidden;
`;

const Styles = StyleSheet.create({
  CompanyWrapper: {
    flex: 2,
    paddingTop: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  ScannereWrapper: {
    flex: 4,
    alignSelf: "stretch",
    backgroundColor: "red",
    width: "100%"
  },
  rc: {
    textAlign: "left",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 9,
    paddingLeft: 10,
    alignSelf: "stretch",
    color: "#34495e"
  }
});
