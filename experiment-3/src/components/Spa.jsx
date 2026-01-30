import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ReviewPage from "./ReviewPage";

export default function SinglePageApp() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", background: "#f2f2f2" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/reviews">Reviews</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes>
    </BrowserRouter>
  );
}
