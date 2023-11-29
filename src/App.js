import { useState } from "react";
import "./App.css";
import "./style.scss";
import "./media-query.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Detail from "./pages/Detail";
import AddEditBlog from "./pages/AddEditBlog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Blogs from "./pages/Blogs";

function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="App">
      <Header setActive={setActive} active={active} />
      <ToastContainer position="top-center"/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/detail/:id" element={<Detail setActive={setActive} />}/>
        <Route path="/create" element={<AddEditBlog />}/>
        <Route path="/update/:id" element={<AddEditBlog />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
