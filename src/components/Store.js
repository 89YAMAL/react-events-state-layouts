import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardViews from "./CardsView"

export default function Store({products}) {
    const [icon, setIcon] = useState('view_list');

    function Switch() {
        icon === 'view_module' ? setIcon('view_list') : setIcon('view_module')
    }

    return (
        <>
         <IconSwitch onSwitch={Switch} icon={icon} />
         {icon === 'view_module' ? <ListView items={products}/> : <CardViews cards={products} /> }
        </>
    )
}