//http://localhost:5137/
//App => Header Home Footer

//http://localhost:5137/comp1
//App => Header comp1 Footer

//http://localhost:5137/login
//App => Header login Footer

//http://localhost:5137/hfkjsdhfshdf
//App => Header Pagenotfound Footer

import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Home from "./Home";
import Comp1 from "./comp1";
import Comp2 from "./comp2";
import Comp3 from "./comp3";
import Comp4 from "./comp4";
import Comp5 from "./comp5";
import Pagenotfound from "./pagenotfound";
import Comp11 from "./Comp11";
import Comp21 from "./Comp21";
import Comp31 from "./Comp31";
import Comp41 from "./Comp41";
import Searchmovie from "./Searchmovie";
import Singlemovie from "./Singlemovie";
import Cart from "./Cart";



const PROJECTROUTE = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="" element={<Home />} />
                <Route path="comp1" element={<Comp1 />} />
                <Route path="comp2" element={<Comp2 p1="100" p2="200" />} />
                <Route path="comp3" element={<Comp3 />} />
                <Route path="comp4" element={<Comp4 />} />
                <Route path="comp5" element={<Comp5 />} />
                <Route path="*" element={<Pagenotfound />} />
                <Route path="comp11" element={<Comp11 />} />
                <Route path="comp21" element={<Comp21 />} />
                <Route path="comp31" element={<Comp31 />} />
                <Route path="comp41" element={<Comp41 />} />
                <Route path="Search" element={<Searchmovie />} />
                <Route path="cart" element={<Cart />} />

                <Route path="singlemovie/:id" element={<Singlemovie />} />


                



                
            </Route>
        </Routes>
    </BrowserRouter>
);
export default PROJECTROUTE;