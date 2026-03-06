export default function Home() {
  return (
    <div className="bg-white text-gray-800">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">MyBrand</h1>
        <div className="space-x-6">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">
          Build Modern Websites with React
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Professional landing page design using Next.js & Tailwind CSS
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Start Now
        </button>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-10 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Features</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-3">Fast</h3>
            <p>Optimized and lightning fast performance.</p>
          </div>

          <div className="p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-3">Responsive</h3>
            <p>Looks perfect on mobile and desktop.</p>
          </div>

          <div className="p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold mb-3">Secure</h3>
            <p>Best security practices used.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border rounded-lg mr-2"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Submit
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-black text-white">
        © 2026 MyBrand. All Rights Reserved.
      </footer>

    </div>
  );
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;

