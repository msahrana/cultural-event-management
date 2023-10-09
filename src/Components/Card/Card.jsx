/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useLoaderData, useParams} from "react-router-dom";


const Card = () => {
    
    const data = useLoaderData()
    console.log(data)

    const {id} = useParams()
    console.log(id)

    const [card, setCard] = useState()
    console.log(setCard)

    useEffect(()=>{
        const findCard = data.find(c=> c.id == id)
        console.log(findCard)
        setCard(findCard)
    },[data])
    

    const {image, name, price, description} = card || {}

    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-10">Event Details </h2>
            <div className="card mx-auto w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p className="text-justify">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;