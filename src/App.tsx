import "./stylesheet/App.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Home from "./pages/home";
import { HashRouter, Route, Routes } from "react-router-dom";
import AboutRouter from "./pages/about_router";

const App = () => {
  return (
    // TODO: develop mode
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="router" element={<AboutRouter />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
};

export default App;
