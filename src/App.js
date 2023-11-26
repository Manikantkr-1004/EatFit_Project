import './App.css';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { MidContent } from './Components/MidContent';
import { Navbar } from './Components/Navbar';
import { ScrollToTop } from './Components/ScrollToTop';
import { TopBanner } from './Components/TopBanner';

function App() {
  return (
    <div>
      <Navbar />
      <TopBanner />
      <MidContent />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
