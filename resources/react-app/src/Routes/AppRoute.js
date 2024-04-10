import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/AboutUs/About";
import Corporate from "../pages/Corporate/Corporate";
import Contact from "../pages/Contact/Contact";
import RootLayout from "../Layouts/RootLayout.jsx";

function AppRoute() {
    return (
        <Routes>
            <Route>
                {/* Örnek tanımlama.*/}
                <Route path="" element={<RootLayout />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/corporate" element={<Corporate />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Route>
            <Route path="/register" element={<div>register</div>} />
            {/* Örnek tanımlama. 
      <Route path="/register" element={<Register />} /> */}
        </Routes>
    );
}

export default AppRoute;
