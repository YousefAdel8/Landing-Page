import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FeaturesPage from "./components/FeaturesPage/FeaturesPage";
import DemoPage from "./components/DemoPage/DemoPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ScrollToTop from "./util/Scroll";
import MobilePage from "./components/MobilePage/MobilePage";

function App() {
	return (
    <>
			<ScrollToTop />
			<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/features" element={<FeaturesPage />} />
					<Route path="/demo" element={<DemoPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/mobile" element={<MobilePage />} />
			</Routes>
	</>
	);
}

export default App;
