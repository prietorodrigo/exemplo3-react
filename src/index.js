import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Hora from "./Hora.jsx";
import Listas from "./Listas.jsx";
import { Eventos } from "./Eventos.jsx";
import { Paragrafo } from "./Paragrafo.jsx";

function Modulos() {
  return (
    <>
      <App />
      <Hora />
      <Listas />
      <Eventos />
      <Paragrafo />
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Modulos />
  </StrictMode>
);
