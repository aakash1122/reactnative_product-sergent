import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Styled from "styled-components";

const CompanyCard = () => {
  return (
    <View>
      <Avatar>
        <Image
          source={{
            uri:
              "https://mir-s3-cdn-cf.behance.net/project_modules/disp/1f706315718513.562961119bf2a.png"
          }}
          style={{ width: "100%", height: "100%", borderRadius: 50 }}
        />
      </Avatar>
      <Text style={styles.title}>Burger King</Text>
    </View>
  );
};

const Avatar = Styled.View`
  width: 60px;
  height:60px;
  margin: 7px;
  border-radius: 30px;
  shadow-color: grey;
  shadow-opacity: 0.48;
  shadow-radius: 11.95;
  elevation: 18;
  `;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 12
  }
});

export default CompanyCard;
