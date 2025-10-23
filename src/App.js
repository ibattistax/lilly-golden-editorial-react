import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div className="container">
              <h2>Page Not Found</h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
