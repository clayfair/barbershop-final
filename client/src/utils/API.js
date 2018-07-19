import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getShops: function() {
    return axios.get("/api/shops");
  }, 
  getShop: function(id) {
    return axios.get(`/api/shops/${id}`);
  }
};

