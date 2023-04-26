import React from "react";

export default function ShopCard(props) {
    const {name, color, img, price} = props.card;

    return (
        <article className="card">
            <header className="header">
                <h3 className="card_name">{name}</h3>
                <div className="card_color">{color}</div>
            </header>
            <img src={img} alt={name}></img>
            <footer className="card_footer">
                <div className="card_price">${price}</div>
                <button className="button">ADD TO CART</button>
            </footer>
        </article>
    )
}