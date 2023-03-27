import { React, useEffect } from "react";
import "../src/assets/icons/font-awesome.css";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Home from "./pages/Home";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <Home />
  );
}

export default App;
