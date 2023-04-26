import React from "react";

export default function ShopItem(props) {
    const {name, color, img, price} = props.item;

    return (
        <article className="item">
            <div className="card_image">
                <img src={img} alt={name}></img>
            </div>
            <h3 className="card_name">{name}</h3>
            <div className="card_color">{color}</div>
            <div className="card_price">${price}</div>
            <div className="card_button">
                <button className="button">ADD TO CART</button>
            </div>
        </article>
    )
}