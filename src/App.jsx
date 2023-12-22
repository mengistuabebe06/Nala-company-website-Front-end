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
import FooterPage from "./components/Footer";
import AboutScreen from "./screen/AboutScreen";
import Projects from "./components/Projects";
import Details from "./components/details";
import ProjectDetails from "./screen/ProjectDetails";
import CareerPage from "./screen/CareerPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="page-wrapper">
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/service" element={<Services />} />
            <Route path="/testemonial" element={<Testemonial />} />
            <Route path="/latestNews" element={<LatestNews />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projectdetails/:id" element={<ProjectDetails />} />
            
            <Route path="/career" element={<CareerPage />} />
            <Route path="/contact" element={<Contact />} />

            {/* <Newstletter /> */}
          </Routes>
          <FooterPage></FooterPage>
        </div>
      </BrowserRouter>

      {/* <h1 className="text-3xl font-bold text-brandPrimary">Hello workld</h1> */}
      {/* <Header></Header>
      <HomeScreen></HomeScreen>
      <Footer></Footer> */}
    </>
  );
}

export default App;
