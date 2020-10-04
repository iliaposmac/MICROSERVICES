import axios from 'axios'

const axiosConfig = axios.create({
    baseURL: "http://localhost:9001"
})

export default axiosConfig