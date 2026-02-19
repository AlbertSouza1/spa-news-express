import axios from 'axios';
import Cookies
 from 'js-cookie';
const baseURL = "http://localhost:3000";

export async function getHomeNews() {
    const allNews = await axios.get(`${baseURL}/news`);
    const topNews = await axios.get(`${baseURL}/news/top`);

    const filteredNews = allNews.data.data.filter(
        item => item.id !== topNews.data.data.id
    );

    return {
        topNews: topNews.data.data,
        news: filteredNews
    };
}

export async function searchNews(title) {
    const response = await axios.get(`${baseURL}/news/search?title=${title}`);
    return response.data?.data;
}

export async function getAllNewsByUser(userId) {
    return await axios.get(`${baseURL}/news/user/${userId}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
}