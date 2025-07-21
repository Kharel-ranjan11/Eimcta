import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './asseest/component/pages/home';
import Footer from './asseest/component/sections/footer';
import Navbar from './asseest/component/sections/navbar';
import PageTransitionWrapper from './asseest/component/utilities/transition_framer';
import ScrollToTopButton from './asseest/component/utilities/ScrolllTop';
import TopHeader from './asseest/component/utilities/topheader';
import TopContactBar from './asseest/component/utilities/TopContactBar';
import NotFound from './asseest/component/pages/pagenofound';
import Blog from './asseest/component/pages/blog';
import ContentBoosting from './asseest/component/pages/content_boosting.jsx';
import Quote from './asseest/component/pages/form.js';
import Services from './asseest/component/pages/service.js';
import About from './asseest/component/pages/about.js';
import Contact from './asseest/component/pages/contactus.jsx';
import { motion, AnimatePresence } from "framer-motion";
import CoreExpertise from './asseest/component/pages/iso_consultancy.jsx';

function App() {
  // const location=useLocation()
  return (
    <div>
      <AnimatePresence mode="wait">
        <TopHeader />
        <TopContactBar />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <PageTransitionWrapper> <Home /></PageTransitionWrapper>} />
          <Route path="/Blog-Offers/FB-Titktok-Linkedin-youtube" element={
            <PageTransitionWrapper>  <Blog /></PageTransitionWrapper>} />

          <Route path="/Blog-Offers/Offers-Contents-Latest-Boosting" element={
            <PageTransitionWrapper> <ContentBoosting /></PageTransitionWrapper>} />

          <Route path="/about-us" element={
            <PageTransitionWrapper> <About /></PageTransitionWrapper>} />

          <Route path="/services" element={
            <PageTransitionWrapper> <Services /></PageTransitionWrapper>} />

          <Route path="/form" element={
            <PageTransitionWrapper> <Quote /></PageTransitionWrapper>} />

          <Route path="/contact-us" element={
            <PageTransitionWrapper> <Contact /></PageTransitionWrapper>} />

          <Route path="services/iso-consultancy" element={
            <PageTransitionWrapper> <CoreExpertise /></PageTransitionWrapper>} />

          {/* iso-consultancy */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ScrollToTopButton />
        <Footer />
      </AnimatePresence>
    </div>

  )
}

export default App;
