import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import { Detail, Form, Home, Landing } from "./views"
import style from "./App.module.css"
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
      </Routes>
    </div>
  );
}
export default App;
