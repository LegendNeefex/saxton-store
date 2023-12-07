import Introduction from "./components/Introduction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Pages/Product";
import Category from "./components/Pages/Category";
import About from "./components/Pages/AboutUs";
import Content from "./components/Content";
import CheckOut from "./components/Pages/CheckOut";
import Payment from "./components/Pages/Payment";
import Carts from "./components/Pages/Carts";
import ContactUs from "./components/Pages/ContactUs";
import SignUp from "./components/Pages/SignUp";
import Login from "./components/Pages/Login";

function App() {
    return ( 
        <BrowserRouter>
            <Introduction />
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/products" element={<Product />}/>
                <Route path="/category" element={<Category />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<ContactUs />}/>
                <Route path="/carts" element={<Carts />}/>
                <Route path="/CheckOut" element={<CheckOut />}/>
                <Route path="/payments" element={<Payment />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
     );
}

export default App;