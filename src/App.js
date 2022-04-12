
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@material-tailwind/react/tailwind.css";
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Home></Home>
      {/* <ProductPage></ProductPage> */}
  </h1>
  );
}

export default App;
