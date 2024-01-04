import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    sessionStorage.clear();
  }, []);
  return (
    <div>
      <Navbar />
      <Portfolio />
      <LoginForm />
    </div>
  );
}

export default App;
