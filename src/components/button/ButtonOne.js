import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const button = () => {
    return (
        <Link to="/" className="btn-action">Join Now</Link>
    )
}

export default button;
