import { AsyncStorage } from "react-native";

export const saveSearchResultInStorage = async product => {
  if (product) {
    const prevdata = await getSearchedDataFromStorage();
    const newData = prevdata ? [...prevdata, product] : [product];
    await AsyncStorage.setItem("searchedItems", JSON.stringify(newData));
  }
};

export const getSearchedDataFromStorage = async () => {
  const data = await AsyncStorage.getItem("searchedItems");
  const formattedData = data ? JSON.parse(data) : null;
  return formattedData;
};

export const clearStorage = async () => {
  await AsyncStorage.removeItem("searchedItems");
  alert("removed");
};
