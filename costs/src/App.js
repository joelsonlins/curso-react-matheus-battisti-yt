import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Links de navegação */}
        <Navbar />

        {/* Conteúdo das rotas */}
        <Container customClass="min_height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/empresa" element={<Company />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/newproject" element={<NewProject />} />
          </Routes>
         
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
