import axios from "axios"
import * as config from "../config/settings.json";

export const $axios = axios.create({
  baseURL: config.API_HOST,
  withCredentials: true,
  headers: {
    [config.API_KEY_HEADER] : config.API_KEY,
  },
})
