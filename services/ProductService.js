import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type":"application/json"
  }
});

export default {
  getDatas(){
    return api.get("/data");
  },
  getData(id){
    return api.get("/data/"+ id);
  }
}
