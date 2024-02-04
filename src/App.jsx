import Introduction from "./components/Introduction";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApiProvider } from "./context/stateHandlers";
import Payment from "./Pages/Payment";
import CategoryDetail from "./Pages/CategoryDetail";
import Login from "./Pages/Login"
import Content from "./components/Content";
import Order from "./Pages/Order"
import CheckOut from "./Pages/CheckOut"
import ContactUs from "./Pages/ContactUs"
import Product from "./Pages/Product"
import Category from "./Pages/Category"
import About from "./Pages/AboutUs"
import SignUp from "./Pages/SignUp";
import Carts from "./Pages/Carts";
import ProductDetail from "./Pages/ProductDetail";
import LogOut from "./Pages/LogOut";
import Profile from "./Pages/Profile";
import OrderItems from "./Pages/OrderItems";

function App() {
    return ( 
       <ApiProvider>
            <BrowserRouter>
                <Introduction />
                <Routes>x   
                    <Route path="/" element={<Content />} />
                    <Route path="/products" element={<Product />}/>
                    <Route path="/category" element={<Category />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<ContactUs />}/>
                    <Route path="/carts" element={<Carts />}/>
                    <Route path="/products/:id" element={<ProductDetail/>}/>
                    <Route path="/category/:id" element={<CategoryDetail/>}/>
                    <Route path="/payments" element={<Payment />}/>
                    <Route path="/checkout" element={<CheckOut />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/orders" element={<Order />}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/logout" element={<LogOut />}/>
                    <Route path="/orderItems/:id" element={<OrderItems />}/>
                </Routes>
            </BrowserRouter>
       </ApiProvider>
     );
}

export default App;