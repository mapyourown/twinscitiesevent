import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sports from './pages/Sports';
import Music from './pages/Music';
import Attractions from './pages/Attractions';
import GuidedTour from './pages/GuidedTour';
import EventSchedule from './pages/EventSchedule';
import BookTourStripeWrapper from './pages/BookTourStripeWrapper';


function App() {
return (
  
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/sports" element={<Sports />} />
<Route path="/music" element={<Music />} />
<Route path="/attractions" element={<Attractions />} />
<Route path="/guidedtour" element={<GuidedTour />} />
<Route path="/eventschedule" element={<EventSchedule />} />
<Route path="/booktour" element={<BookTourStripeWrapper />} />
</Routes>
</BrowserRouter>
);
}


export default App;