import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Steps from "./components/steps/Steps";
import Reviews from "./components/reviews/Reviews";
import Faqs from "./components/faqs/Faqs";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GenerateQr from "./components/generate-qr/GenerateQr";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Steps />
              <Reviews />
              <Faqs />
              <Footer />
            </>
          }
        />
        <Route
          path="/qr-code-generator"
          element={
            <>
              <Navbar />
              <GenerateQr />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
