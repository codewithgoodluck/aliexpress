import { createContext, useContext, useReducer } from "react";
import axious from "axios";
//create reducer

const Product = createContext();

const Context = ({ children }) => {
  const [post, setPost] = React.useState(null);
  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
  React.useEffect(() => {
    axious.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  // define use reducer
  const [state, dispatch] = useReducer(productReducer, {
    products: post,
    prod: [],
  });

  return (
      <Product.Provider value={{state, dispatch}}>{children}

      </Product.Provider>
  )
};

export default Context

export const ProductState=()=>{
    return useContext(Product)
}
