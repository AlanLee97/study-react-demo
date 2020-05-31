import axios from "axios";

let ip = "47.103.204.62";
let port = "8764";
let apiVersion = "/api/v1";
let prefix = "http://" + ip + ':' + port + apiVersion;

export function request(config) {
  const axiosInstance = axios.create({
    baseURL: prefix,
    timeout: 5000,
    headers: {
      "content-type" : "application/x-www-form-urlencoded"
    }
  });

  return axiosInstance(config);
}
