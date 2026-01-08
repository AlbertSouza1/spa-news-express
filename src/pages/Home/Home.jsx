import { useState, useEffect } from "react";
import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import * as newsService from "../../services/newsService.js";
import { HomeBody } from "./HomeStyled.jsx";

export default function Home() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        async function getAllNews() {
            const response = await newsService.getAllNews();
            setNews(response.data.data);
        }

        getAllNews();
    }, []);

    return (
        <>
            <Navbar />
            <HomeBody>
                {news.map(item =>
                    <Card
                     key={item.id}
                     title={item.title}
                     text={item.text}
                     banner={item.banner}
                     likes={item.likes.length}
                     comments={item.comments.length}
                    />
                )}
            </HomeBody>
        </>
    )
}