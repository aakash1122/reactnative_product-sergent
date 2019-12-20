import axios from "axios";

const searchFromApi = async param => {
  try {
    const data = await axios.post(
      "https://product-sergeant-api.herokuapp.com/products/find",
      {
        upc: param
      }
    );
    const jsonData = JSON.stringify(data);
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export default searchFromApi;
