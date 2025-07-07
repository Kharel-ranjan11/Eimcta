import './App.css';
import './index.css';
import Navbar from './asseest/component/sections/navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './asseest/component/pages/home';
import Overview from './asseest/component/pages/overview';
import Stats from './asseest/component/pages/strats';
import Services from './asseest/component/pages/service';
import Consulting from './asseest/component/pages/consulting';
import Strategy from './asseest/component/pages/strategy';
import Footer from './asseest/component/sections/footer';
import { AnimatePresence } from 'framer-motion';

import PageTransitionWrapper from './asseest/component/utilities/transition_framer';
import ScrollToTopButton from './asseest/component/utilities/ScrolllTop';
function App() {
  // const location=useLocation()
  return (
    <div>
      <AnimatePresence mode='wait'>

      
<Router>
      <Navbar />
        <Routes>
          <Route path="/home" element={
           <PageTransitionWrapper > <Home />
           </PageTransitionWrapper>} />
          <Route path="/home/overview" element={<Overview />} />
          <Route path="/home/overview/stats" element={<Stats />} />
          <Route path="/services" element={  <PageTransitionWrapper >
 <Services />
          </PageTransitionWrapper>
            } />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/consulting/strategy" element={<Strategy />} />
        </Routes>
        <ScrollToTopButton/>
    </Router>
    </AnimatePresence>
<Footer/>
    </div>

  )
}

export default App;
