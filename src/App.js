import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NiceModal from "@ebay/nice-modal-react";
import "@material-tailwind/react/tailwind.css";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage";
import Product from "./Pages/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productpage" element={<ProductPage></ProductPage>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </Router>
  );
}

export default App;
