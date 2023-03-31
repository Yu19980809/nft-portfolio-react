import React from "react";
import Header from "../components/header/header";
import Slider from "../components/slider/slider";
import About from "../layouts/About";

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />
            <About />
        </div>
    );
}

export default Home;
