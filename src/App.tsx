import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/App.scss";

import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
