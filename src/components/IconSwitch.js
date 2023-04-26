import React from "react";
import PropTypes from "prop-types";

export default function IconSwitch({icon, onSwitch}) {
    return (
        <div className="IconSwitch">
            <span className="material-icons" onClick={onSwitch}>{icon}</span>
        </div>
    )
}

IconSwitch.propTypes = {
    onSwitch: PropTypes.func,
    icon: PropTypes.string
}