import "./stylesheet/App.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="content">
          <h1>Welcome to the Sidebar Page</h1>
          <p>This is a simple example of a page with a collapsible sidebar.</p>
        </main>
      </div>
    </div>
  );
};

export default App;
