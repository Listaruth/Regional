import Nav from "./Nav";
import { Routes,Route } from "react-router-dom";
import Newpost from "./Newpost";
import Home from "./Home";
import About from "./About";
import { useEffect, useState } from "react";
import api from './api/products'
import ProductPage from "./ProductPage";
import './App.css'
function App() {
  const [products,SetProducts]= useState([])
  const [search,setSearch]=useState("")
  useEffect(() => {
    const fetchproducts = async ()=>{
      try{
        const response = await api.get("/products")
        SetProducts(response.data)
      }catch(err){
      if (err.response){
        console.log(err.response)
        console.log(err.headers)
        console.log(err.status)
      }else{
        console.log(`Error : ${err.message}`)
      }
      }
    }
    fetchproducts()
  }, [])
  
  return (
    <div className="App">
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Home products={products.filter(product => ((product.title).toLowerCase()).includes(search.toLowerCase()))}/>}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/product/:product" element={<ProductPage/>}/>
        <Route exact path="/newproduct" element={<Newpost />}/>
      </Routes>
    </div>
  );
}

export default App;
