import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/Contexts/UserContext";
import { ProfileActions, ProfileAvatar, ProfileBackground, ProfileContainer, ProfileHeader, ProfileIconAdd, ProfileIconEdit, ProfilePosts, ProfileUser } from "./ProfileStyled";
import * as newsService from "../../services/newsService";
import { Card } from "../../components/Cards/Card";

export function Profile() {
    const { user } = useContext(UserContext);

    const [news, setNews] = useState([]);


    useEffect(() => {
        async function findUserNews() {
            console.log(user);
            const response = await newsService.getAllNewsByUser(user.id);
            setNews(response.data.data);
            console.log(news);
        }

        findUserNews();
    }, []);

    return (
        <ProfileContainer>
            <ProfileHeader>
                <ProfileIconEdit>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg>
                </ProfileIconEdit>

                <ProfileBackground src={user.background} alt=""></ProfileBackground>

                <ProfileUser>
                    <ProfileAvatar src={user.avatar} alt="foto do usuário" />
                    <h2>{user.name}</h2>
                    <h3>@{user.username}</h3>
                </ProfileUser>

                <ProfileActions>
                    <ProfileIconAdd>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                    </ProfileIconAdd>
                </ProfileActions>

            </ProfileHeader>

            <ProfilePosts>

                {news.length === 0 &&
                    <h2>Este usuário ainda não publicou nenhuma notícia...</h2>
                }
                {news.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            title={item.title}
                            text={item.text}
                            banner={item.banner}
                            likes={item.likes}
                            comments={item.comments}
                        />
                    )
                })}

            </ProfilePosts>

        </ProfileContainer>
    );
}