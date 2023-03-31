import React from "react";
import Header from "../components/header/header";
import Slider from "../components/slider/slider";
import About from "../layouts/About";
import Speciality from "../layouts/Speciality";
import dataCard from "../assets/data/card";

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <About />
            <Speciality data={ dataCard } />
        </div>
    );
}

export default Home;
