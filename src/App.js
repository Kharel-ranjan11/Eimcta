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

function App() {
  // const location=useLocation()
  return (
    <div>
      <Router>
        <TopHeader />
        <TopContactBar />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <PageTransitionWrapper> <Home /></PageTransitionWrapper>} />
          <Route path="/Blog-Offers/FB-Titktok-Linkedin-youtube" element={
            <PageTransitionWrapper>  <Blog /></PageTransitionWrapper>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ScrollToTopButton />
      <Footer />
    </div>

  )
}

export default App;
