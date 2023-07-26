import React, { useEffect, useState } from "react";
import CardItem from './CardItem';
import './Cards.css';
import axios from "axios";

export default function Cards() {
    const[cards ,setCards] = useState("");

    useEffect( () => {
        const fetchdata = async () => {
            const data = await axios.get('http://localhost:5000/CardInfoRoute/');
            setCards(data);
        };
        fetchdata();
    }, [])


    return (
        <div className='cards'>
            <h1>Shop By Category</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        {cards && 
                            cards?.data.map((card) => (
                                <CardItem
                                    image = {card.image}
                                    category = {card.category}
                                    description = {card.description}
                                    type = {card.type}
                                />   
                            ))
                        } 
                    </ul>
                    
                </div>
            </div>
        </div>
      )
}

