import axios from "axios";
export default axios.create({
  baseURL: "https://e-commerce-backend-coding.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
