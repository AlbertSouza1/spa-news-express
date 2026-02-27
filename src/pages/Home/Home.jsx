import { useState, useEffect, useContext } from "react";
import { Card } from "../../components/Cards/Card";
import * as newsService from "../../services/newsService.js";
import { HomeBody, HomeHeader } from "./HomeStyled.jsx";
import { UserContext } from "../../Contexts/Contexts/UserContext.jsx";
import { Loader } from "../../components/Loader/Loader.jsx";

export default function Home() {

    const { user } = useContext(UserContext);
    const [news, setNews] = useState([]);
    const [topNews, setTopNews] = useState(null);

    const updateLikesArray = (likes = [], userId, isLiking) =>
        isLiking
            ? [...likes, { userId }]
            : likes.filter(like => like.userId !== userId);

    const handleLike = async (newsId, isLiking) => {
        await newsService.toggleLike(newsId);

        setNews(prev => prev.map(item =>
            item.id === newsId
                ? {
                    ...item, likes: updateLikesArray(item.likes, user.id, isLiking)
                }
                : item
        ));

        setTopNews(prev =>
            prev?.id === newsId
                ? {
                    ...prev,
                    likes: updateLikesArray(prev.likes, user.id, isLiking)
                }
                : prev
        );
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
            {
                topNews && news?.length ? (
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
                ) : (
                    <Loader />
                )
            }
        </>
    )
}