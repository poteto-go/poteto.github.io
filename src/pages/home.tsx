"use client";
import logo from "../assets/poteto.svg";

const Home = () => {
  return (
    <main className="content">
      <h1>Welcome to Poteto Wiki</h1>
      <p>
        <a href="https://github.com/poteto-go/poteto">Poteto</a>: Simple API/RPC
        Framework for GoLang
      </p>
      <img src={logo} width={"50%"} />
    </main>
  );
};

export default Home;
