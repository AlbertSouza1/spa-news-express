import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from '../../Data.js';

export default function Home() {
    return (
        <>
            <Navbar />
            {news.map(item =>
                <Card key={item.id} {...item} />
            )}
        </>
    )
}