import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000" // adresa backenda
  // timeout: 10000 // "1s da poziv prema backendu uspije, više od toga ne čeka"
});
