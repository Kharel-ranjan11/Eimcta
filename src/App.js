import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './asseest/component/pages/home';
import Footer from './asseest/component/sections/footer';
import Navbar from './asseest/component/sections/navbar';
import PageTransitionWrapper from './asseest/component/utilities/transition_framer';
import ScrollToTopButton from './asseest/component/utilities/ScrolllTop';

import NotFound from './asseest/component/pages/pagenofound';
import Blog from './asseest/component/pages/blog';
import ContentBoosting from './asseest/component/pages/content_boosting.jsx';
import Quote from './asseest/component/pages/form.js';
import Services from './asseest/component/pages/service.js';
import About from './asseest/component/pages/about.js';
import Contact from './asseest/component/pages/contactus.jsx';
import { motion, AnimatePresence } from "framer-motion";
import CoreExpertise from './asseest/component/pages/iso_consultancy.jsx';
import { Faq } from './asseest/component/pages/faq.jsx';
import Traning from './asseest/component/utilities/traning/traning.jsx';
import EnvironmentalServices from './asseest/component/pages/Enviroment.jsx';
import ISOConsultancy from './asseest/component/pages/iso_consultancy.jsx';
import SafetySignPPE from './asseest/component/pages/safetysignppe.jsx';
import TechnicalBidComponent from './asseest/component/pages/Bid_tender';
import ISOAuditGuide from './asseest/component/pages/aduit.jsx';
import HealthSafety from './asseest/component/utilities/health&safety.jsx';
import HSEAwarenessTraining from './asseest/component/utilities/HSE.jsx';
import HSEAudits from './asseest/component/utilities/hseaduit.jsx';
import Chat from './asseest/component/utilities/chat';
import TopContactBar from './asseest/component/utilities/Top_Contact.jsx';
import ISO21001Guide from './asseest/component/pages/Iso_21001.jsx';
import ISO9001Certification from './asseest/component/pages/ISO_9001.jsx'
import ISO45001Certification from './asseest/component/pages/iso_45001.jsx';
import TopHeader from './asseest/component/utilities/topheader.jsx';
import ISO_certification from './asseest/component/pages/iso_certificate.jsx';
import ISO22000Certification from './asseest/component/pages/iso2200.jsx';

// import ISO22000Certification from './asseest/component/pages/ISO_2200';

function App() {
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
            <PageTransitionWrapper> <ISOConsultancy /></PageTransitionWrapper>} />

          <Route path="Blog-Offers/FAQ" element={
            <PageTransitionWrapper> <Faq /></PageTransitionWrapper>} />

          <Route path="services/iso-certification" element={
            <PageTransitionWrapper> <ISO_certification /></PageTransitionWrapper>} />

          <Route path="services/environmental-services-eta-env-monitoring-air-water-soil-etc" element={
            <PageTransitionWrapper> <EnvironmentalServices /></PageTransitionWrapper>} />

          <Route path="services/iso-training/ohs/health-safety-plan-doc" element={
            <PageTransitionWrapper> <HealthSafety /></PageTransitionWrapper>} />

          <Route path="services/iso-training/ohs/implementation" element={
            <PageTransitionWrapper> <HSEAwarenessTraining /></PageTransitionWrapper>} />

          <Route path="services/iso-training/ohs/audits" element={
            <PageTransitionWrapper> <HSEAudits /></PageTransitionWrapper>} />

          <Route path="services/supply-of-sign-quality-safety-env-companies" element={
            <PageTransitionWrapper> <SafetySignPPE /></PageTransitionWrapper>} />
          {/* bid */}
          <Route path="services/tender-technical-bid-preparation" element={
            <PageTransitionWrapper> <TechnicalBidComponent /></PageTransitionWrapper>} />

          <Route path="services/iso-audit" element={
            <PageTransitionWrapper> <ISOAuditGuide /></PageTransitionWrapper>} />

          <Route path="service/iso/2100" element={<PageTransitionWrapper> < ISO21001Guide
          /></PageTransitionWrapper>} />

          <Route path="service/iso/2200" element={<PageTransitionWrapper> <ISO22000Certification />  </PageTransitionWrapper>} />

          <Route path="service/iso/9001" element={<PageTransitionWrapper> < ISO9001Certification /></PageTransitionWrapper>} />

          <Route path="service/iso/45001" element={<PageTransitionWrapper> < ISO45001Certification /></PageTransitionWrapper>} />

          <Route path="services/iso-training" element={<PageTransitionWrapper><Traning /></PageTransitionWrapper>}>

            {/* {Router_link.map(({ path, element }, index) => (
              <Route key={index} path={path.replaceAll("_", "-")} element={element} />
            ))} */}
          </Route>
          {/* neboshIgcUk */}
          {/* <Route path="/neboshDiplomaUk" element={<Permit_to_Work_System_PTW />} />  */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Chat />
        <ScrollToTopButton />
        <Footer />
      </AnimatePresence>
    </div>

  )
}

export default App;