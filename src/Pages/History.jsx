import { useLoaderData } from "react-router-dom";
import Cards from "../Components/Cards/Cards";




const History = () => {

    const cards = useLoaderData()
    console.log(cards)

    return (
        <div>
            <div className="mx-40">
                <h2 className="text-5xl font-bold text-center my-10">Our service History</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                cards.map(card=> <Cards key={card.id} card={card}></Cards>)
            }
                </div>
            </div>
        </div>
    );
};

export default History;