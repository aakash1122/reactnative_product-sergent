import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Styled from "styled-components";

const SearchedCard = ({ data }) => {
  const { item } = data;
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: item.scanned ? "#e74c3c5c" : "#2ecc7161" }
      ]}
    >
      <View style={styles.left}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.right}>
        <InfoText>Brand: {item.brand}</InfoText>
        <InfoText>Vendor: {item.vendor}</InfoText>
        <InfoText>Exp: {item.expiry_date ? item.expiry_date : "N/A"}</InfoText>
        <InfoText>Should buy : {item.scanned ? "No" : "yes"}</InfoText>
      </View>
    </View>
  );
};

const InfoText = Styled.Text`
  font-size: 10px;
  text-align: left;
`;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    width: "100%",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    alignSelf: "stretch"
  },
  left: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  right: {
    flex: 2,
    justifyContent: "center",
    alignItems: "stretch",
    paddingLeft: 4
  },
  name: {
    fontSize: 14,
    fontWeight: "bold"
  },
  info: {
    fontSize: 10
  }
});

export default SearchedCard;
