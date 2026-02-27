import { useState, useEffect, useContext } from "react";
import { Card } from "../../components/Cards/Card";
import * as newsService from "../../services/newsService.js";
import { HomeBody, HomeHeader } from "./HomeStyled.jsx";
import { UserContext } from "../../Contexts/Contexts/UserContext.jsx";

export default function Home() {

    const { user } = useContext(UserContext);
    const [news, setNews] = useState([]);
    const [topNews, setTopNews] = useState({});

    const handleLike = async (newsId, isLiking) => {
        const response = await newsService.toggleLike(newsId);
        console.log("Resultado:" + response.data);

        setNews(prev => prev.map(item =>
            item.id === newsId
                ? {
                    ...item, likes: isLiking
                        ? [...item.likes, user.id]
                        : item.likes.filter(id => id !== user.id)
                }
                : item
        ));
    };

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
            <HomeHeader>
                <Card
                    variant={"top"}
                    {...topNews}
                    onLike={handleLike}
                />
            </HomeHeader>
            <HomeBody>
                {news.map(item =>
                    <Card
                        key={item.id}
                        {...item}
                        onLike={handleLike}
                    />
                )}
            </HomeBody>
        </>
    )
}