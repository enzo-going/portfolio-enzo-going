import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Fontes servidas pelo próprio site: sem o CSS do Google Fonts bloqueando a
// primeira pintura e sem pedido a terceiros para quem visita.
import "./fonts.css";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
