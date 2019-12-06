import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  ActivityIndicator,
  Colors,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph
} from "react-native-paper";

export default class CheckProduct extends Component {
  static navigationOptions = {
    title: "Scan Result"
  };

  state = {
    loading: false
  };

  render() {
    const { navigation } = this.props;
    console.log(navigation.getParam("data"));
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
    return (
      <Card>
        <Card.Content>
          <Title>Product Name</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    );
  }
}
