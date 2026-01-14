import { useState, useEffect } from "react";
import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import * as newsService from "../../services/newsService.js";
import { HomeBody, HomeHeader } from "./HomeStyled.jsx";

export default function Home() {

    const [news, setNews] = useState([]);
    const [topNews, setTopNews] = useState({});

    useEffect(() => {
        async function getNews() {
            const newsResponse = await newsService.getHomeNews();

            setNews(newsResponse.news);
            setTopNews(newsResponse.topNews);
        }

        getNews();
    }, []);

    return (
        <>
            <Navbar />
            <HomeHeader>
                <Card
                    variant={"top"}
                    title={topNews.title}
                    text={topNews.text}
                    banner={topNews.banner}
                    likes={topNews.likes}
                    comments={topNews.comments}
                />
            </HomeHeader>
            <HomeBody>
                {news.map(item =>
                    <Card
                        key={item.id}
                        title={item.title}
                        text={item.text}
                        banner={item.banner}
                        likes={item.likes}
                        comments={item.comments}
                    />
                )}
            </HomeBody>
        </>
    )
}