import React from "react";
import { createRoot } from "react-dom/client";

import "./style.css";
import App from "./components/App";
import PROJECTROUTE from "./components/Route";


createRoot(document.getElementById("root")).render(PROJECTROUTE);