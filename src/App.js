import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
