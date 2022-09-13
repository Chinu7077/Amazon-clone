import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5001/fir-52e63/us-central1/api'
});
export default instance;