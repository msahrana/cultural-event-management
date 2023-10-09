import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Header/Banner";
import Cards from "../Components/Cards/Cards";
import FeaturePart1 from "../Feature/FeaturePart1";
import FeaturePart2 from "../Feature/FeaturePart2";


const Home = () => {

    const cards = useLoaderData()
    console.log(cards)

    return (
        <div>
            <Banner></Banner>
            <div className="mx-40">
                <h2 className="text-5xl font-bold text-center my-10">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                cards?.map(card=> <Cards key={card.id} card={card}></Cards>)
            }
                </div>
            </div>
            <div>
                <FeaturePart1></FeaturePart1>
                <FeaturePart2></FeaturePart2>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Home;