import productData from "./utils/data";
import ProductCard from "./components/ProductCard";
import "./App.css"

function App() {
  return (
    <>
     <h1 id="store-title">My E-commerce Store</h1>
        <div id="App">
          {productData.map((product)=> <ProductCard title={product.title} price={product.price} image={product.image} />)}
        </div>  
    </>
  

     
  );
}

export default App;
