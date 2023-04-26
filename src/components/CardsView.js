import React from "react";
import PropTypes from "prop-types";
import ShopCard from "./ShopCard";


export default function CardsView({cards}) {
    return (
        <main className='CardsView'>
            {cards.map((card, index) => {return <ShopCard card={card} key={index} />})}
        </main>
    )
}

CardsView.propTypes = {
    cards: PropTypes.array.isRequired
}
