import axios from 'axios';

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