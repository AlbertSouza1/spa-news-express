import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from '../../Data.js';
import { HomeBody } from "./HomeStyled.jsx";

export default function Home() {
    return (
        <>
            <Navbar />
            <HomeBody>
                {news.map(item =>
                    <Card key={item.id} {...item} />
                )}
            </HomeBody>
        </>
    )
}