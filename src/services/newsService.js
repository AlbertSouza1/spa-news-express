import axios from 'axios';

const baseURL = "http://localhost:3000";

export function getAllNews() {
    return axios.get(`${baseURL}/news`);  
}