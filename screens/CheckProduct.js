import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import axios from "axios";
import Styled from "styled-components";
import { Button } from "react-native-paper";

import { saveSearchResultInStorage } from "../utils/storage";

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
        saveSearchResultInStorage(data.data.product);
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
    if (this.state.productInfo) {
      return (
        <Container>
          <Text style={{ padding: 10, textAlign: "left" }}>
            Search Result :
          </Text>
          <ViewCard>
            <View>
              <Text style={[styles.Btext]}>{productInfo.name}</Text>
              <Text>Brand: {productInfo.brand}</Text>
              <Text>Origin: {productInfo.origin}</Text>
              <Text>Vendor: {productInfo.vendor}</Text>
              <Text>
                exp: {productInfo.expiry_date ? productInfo.expiry_date : "N/A"}
              </Text>
              {productInfo.scanned ? (
                <View
                  style={{
                    padding: 5,
                    backgroundColor: "#ff7979",
                    marginTop: 10
                  }}
                >
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    The product was scanned before
                  </Text>
                  {alert("We do not recommend you to buy this product!")}
                </View>
              ) : (
                <View
                  style={{
                    padding: 5,
                    backgroundColor: "green",
                    marginTop: 10
                  }}
                >
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    The product is Authentic
                  </Text>
                </View>
              )}
            </View>
            <Button
              mode="outlined"
              color="#ff6b81"
              onPress={() => this.props.navigation.goBack()}
            >
              Go Back
            </Button>
          </ViewCard>
        </Container>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>
          Product Not Found
        </Text>
        <Button
          mode="contained"
          color="#ff6b81"
          dark={true}
          onPress={() => this.props.navigation.goBack()}
        >
          search Again
        </Button>
      </View>
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
  justify-content: space-around;
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
