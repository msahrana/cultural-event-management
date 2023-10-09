/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams} from "react-router-dom";


const Card = () => {
    
    // const data = useLoaderData()
    // console.log(data)

    const id = useParams()
    console.log(id)

    const [card, setCard] = useState({})

    // const {id} = useParams()

    // useEffect(()=>{
    //     fetch(`/events.json/${card.id}`)
    //     .then(data=> setCard(data))
    // },[card.id])
    // console.log(card)

    useEffect(()=>{
        const findCard = card.find(card=> card.id === id)
        setCard(findCard)
    },[])
    console.log(card)

    const {image, name, price, description} = card || {}


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;