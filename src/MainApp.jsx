import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Program from "./Program";
import Workout from "./Workout";
import Ai from "./Ai";
import ProductList from "./Product/ProductList";
import NewProduct from "./Product/NewProduct";
import ProductDetails from "./Product/ProductDetails";
import CheckoutPage from "./Product/CheckoutPage";
import OrderConfirmation from "./Product/OrderConfirmation";
import Login from "./User/Login";
import Signup from "./User/Signup";

import NotFound from "./NotFound";

function MainApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/workouts" element={<Workout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default MainApp;
