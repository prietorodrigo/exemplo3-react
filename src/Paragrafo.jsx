import { useState } from "react";

export function Paragrafo() {
  const [para, setPara] = useState(0);

  function clique() {
    if (para % 2 === 0) {
      document.querySelector("#teste").style.color = "orange";
    } else {
      document.querySelector("#teste").style.color = "black";
    }
    setPara(para + 1);
  }

  return (
    <>
      <p id="teste">Paragrafo de teste</p>
      <button onClick={clique}>Troca cor</button>
    </>
  );
}
