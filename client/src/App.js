import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import { Detail, Form, Home, Landing } from "./views";
import style from "./App.module.css";
import axios from "axios";
import { About } from "./views/about/about";
axios.defaults.baseURL="https://countriesapp-production-492d.up.railway.app/"

function App() {
  const location = useLocation()

  return (
    <div className={style.app}>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/countries/:id" element={<Detail />} />
        <Route path="/addactivity" element={<Form />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
