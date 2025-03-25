import { Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Upload from "./pages/Upload.jsx";
import Working from "./pages/Working.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/working" element={<Working />}></Route>
        </Routes>

        <Footer />
      </>
    </div>
  );
}

export default App;
