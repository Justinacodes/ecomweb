import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Guarantee from "./components/Guarant/Guarant";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./pages/Products/Products";
import Checkout from "./pages/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "./scss/main.scss";
import Carts from "./pages/Cart/Cart";
import "react-toastify/dist/ReactToastify.css";


//import SearchResults from "./components/SearchResults";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />

        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/search/:query" element={<SearchResults />} /> */}
          {/* <Route path="/search" element={<SearchResults />} /> */}
          <Route path="/shop" element={<Homepage />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Carts />} />
          {/* <Route
            path="/search/:query"
            element={
              <>
                <SearchResults />
                <Guarantee />
                <Footer />
              </>
            }
          /> */}
        </Routes>
        <ToastContainer />
        <Guarantee />
        <Footer />
      </BrowserRouter>

      


    </>
  );
};

export default App;
