import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableNativeFeedback,
  StyleSheet
} from "react-native";
import Constants from "expo-constants";
import { ActivityIndicator, Colors } from "react-native-paper";

import SearchedCard from "../components/SearchedCard";
import { getSearchedDataFromStorage, clearStorage } from "../utils/storage";

const SearchedScreen = () => {
  let [searchedData, setSearchedData] = useState(null);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getSearchedDataFromStorage();
      if (data) {
        setSearchedData(data);
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator
          animating={true}
          color={Colors.red800}
          size="large"
        />
      </View>
    );
  }

  if (!searchedData) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ width: "70%", padding: 25, backgroundColor: "#fdcb6e" }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            No search history!
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "column"
      }}
    >
      <Text
        style={{
          alignSelf: "flex-start",
          height: "6%",
          fontWeight: "bold",
          fontSize: 14,
          color: "#34495e",
          marginTop: 3
        }}
      >
        Search History
      </Text>
      <FlatList
        data={searchedData}
        renderItem={item => <SearchedCard data={item} />}
        keyExtractor={item => String(Math.random() * 100)}
        style={{ height: "70%" }}
      />

      <TouchableNativeFeedback
        onPress={() => {
          clearStorage();
          setSearchedData(null);
        }}
      >
        <View style={styles.clearButton}>
          <Text
            style={{
              textAlign: "center",
              color: "#fc5c65",
              fontWeight: "bold"
            }}
          >
            Clear
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  clearButton: {
    padding: 5,
    width: "30%",
    alignSelf: "flex-end",
    marginTop: 5,
    marginBottom: 5,
    borderColor: "#fc5c65",
    borderWidth: 1
  }
});

export default SearchedScreen;
