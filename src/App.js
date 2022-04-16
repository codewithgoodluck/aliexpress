
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NiceModal from '@ebay/nice-modal-react';
import "@material-tailwind/react/tailwind.css";
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import Product from './Pages/Product';

function App() {
  return (
    <NiceModal.Provider>
    <h1 className="text-3xl font-bold underline">
      {/* <Home></Home> */}
      {/* <ProductPage></ProductPage> */}
      <Product></Product>
  </h1>
  </NiceModal.Provider>
  );
}

export default App;
