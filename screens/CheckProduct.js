import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import axios from "axios";
import Styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export default class CheckProduct extends Component {
  static navigationOptions = {
    title: "Scan Result"
  };
  state = {
    loading: true,
    productInfo: null
  };

  componentDidMount() {
    const camData = this.props.navigation.getParam("data");
    this.searchFromApi(camData);
  }

  searchFromApi = data => {
    console.log("cam data: ", data);
    axios
      .post("https://product-sergeant-api.herokuapp.com/products/find", {
        upc: data
      })
      .then(data => {
        this.setState({
          ...this.state,
          productInfo: data.data.product,
          loading: false
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator
            animating={true}
            color={Colors.red800}
            size="large"
          />
        </View>
      );
    }
    const { productInfo } = this.state;
    console.log(productInfo);
    return (
      <Container>
        <ViewCard>
          {/* <Text>{productInfo.name}</Text>
        <Text>{productInfo.brand}</Text>
        <Text>{productInfo.origin}</Text>
        <Text>{productInfo.vendor}</Text>
        <Text>exp: {productInfo.expiry_date}</Text> */}
          <Text style={[styles.Btext]}>Apple juice</Text>
          <Text>Nineta</Text>
          <Text>Bangladesh</Text>
          <Text>akiz group</Text>
          <Text>exp: 12/12/12</Text>
        </ViewCard>
      </Container>
    );
  }
}

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  shadow-color: grey;
  shadow-opacity: 0.48;
  shadow-radius: 11.95;
  elevation: 18;
`;

const ViewCard = Styled.View`
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 50%;
  background-color: #ffffff;
  shadow-color: grey;
  shadow-opacity: 0.48;
  shadow-radius: 11.95;
  elevation: 18;
`;

const styles = StyleSheet.create({
  Btext: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    letterSpacing: 2
  }
});
