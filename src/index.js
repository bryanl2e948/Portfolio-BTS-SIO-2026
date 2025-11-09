import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./components/App";

import "@tailwindplus/elements";
import reportWebVitals from './reportWebVitals';

// Création du root React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
