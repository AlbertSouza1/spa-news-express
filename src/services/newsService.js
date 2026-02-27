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

export async function addNews(newsData) {
    return await axios.post(`${baseURL}/news/`, newsData, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
}

export async function editNews(newsData, id) {
    return await axios.patch(`${baseURL}/news/${id}`, newsData, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
}

export async function getNewsById(id) {
    return await axios.get(`${baseURL}/news/${id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
}

export async function deleteNews(id) {
    return await axios.delete(`${baseURL}/news/${id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    });
}

export async function toggleLike(newsId) {
    return await axios.patch(`${baseURL}/news/like/${newsId}`, null, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })
}