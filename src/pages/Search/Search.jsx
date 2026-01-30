import { useParams } from "react-router-dom";
import * as newsService from "../../services/newsService.js";
import { useEffect, useState } from "react";
import { Card } from "../../components/Cards/Card.jsx";
import { ContainerResults, SearchedNews, TextResult } from "./SearchStyled.jsx";

export default function Search() {

    const { title } = useParams();
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function searchNews() {

            try {
                const searchedNews = await newsService.searchNews(title);
                setNews(searchedNews);
            } catch (error) {
                console.log(error);
                setNews([]);
            }
        }

        searchNews();
    }, [title])

    return (
        <ContainerResults>
            <TextResult>
                <span>
                    {news.length === 0 
                    ? `Não encontramos resultados para:`
                    : `Encontramos ${news.length} resultado(s) para:`}
                </span>
                <h2>{title}</h2>
            </TextResult>

            <SearchedNews>
                {news.map((item) => {
                    <Card
                        key={item.id}
                        title={item.title}
                        text={item.text}
                        banner={item.banner}
                        likes={item.likes}
                        comments={item.comments}
                    />
                })}

            </SearchedNews>
        </ContainerResults>
    )
}