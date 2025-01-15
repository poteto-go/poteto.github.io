import "./stylesheet/App.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutRouter from "./pages/about_router";

const App = () => {
  return (
    // TODO: develop mode
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <BrowserRouter basename={"/poteto.github.io"}>
          <Routes>
            <Route path="/poteto.github.io" element={<Home />} />
            <Route path="/router" element={<AboutRouter />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
