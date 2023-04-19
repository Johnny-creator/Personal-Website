import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import About from "./components/pages/About";
import Skills from './components/pages/Skills';
import Error from "./components/pages/Error";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
