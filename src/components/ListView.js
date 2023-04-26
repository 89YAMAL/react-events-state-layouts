import React from "react";
import PropTypes from "prop-types";
import ShopItem from "./ShopItem";

export default function ListView({items}) {
    return (
        <main className='ListView'>
            {items.map((item, index) => {return <ShopItem item={item} key={index} />})}
        </main>
    )
}

ListView.propTypes = {
    items: PropTypes.array.isRequired
}
