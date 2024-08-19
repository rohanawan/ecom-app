import axios from "axios";
import { serverUrl } from "../constants";

export default axios.create({
    baseURL: serverUrl,
});
