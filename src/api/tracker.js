import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "http://43a1-2601-740-8100-a220-4116-4f94-584e-c497.ngrok-free.app",
});
instance.interceptors.request.use(
  // Default Case
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  // Error Case
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
