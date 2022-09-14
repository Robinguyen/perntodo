import axios from "axios"
export default axios.create({ //create axios
    baseURL: "http://localhost:3005/api/v1/product", // url axios data
})