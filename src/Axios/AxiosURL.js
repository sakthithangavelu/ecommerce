import axios from "axios";

const ecommerceUrl = axios.create({
        baseURL: "http://localhost:8000"
});

export default  ecommerceUrl