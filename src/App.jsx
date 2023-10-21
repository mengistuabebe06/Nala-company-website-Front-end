import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screen/HomeScreen";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import About from "./components/About";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Newstletter from "./components/Newstletter";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./screen/HomePage";
import Testemonial from "./components/Testemonial";
import LatestNews from "./components/LatestNews";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <HomeScreen />
        {/* <Routes>
          {/* <Route path="/course" element={<HomePage/>} /> */}
        {/* </Routes>  */}
        {/* <About /> */}
        <Services />
        <Testemonial />
        <LatestNews />
        {/* <Products /> */}
        {/* <Blog /> */}
        <Contact />
        <Newstletter />
        <Footer />
      </BrowserRouter>
      {/* <h1 className="text-3xl font-bold text-brandPrimary">Hello workld</h1> */}
      {/* <Header></Header>
      <HomeScreen></HomeScreen>
      <Footer></Footer> */}
    </>
  );
}

export default App;
