import { useState } from "react";

export function Eventos() {
  const [contador, setContador] = useState(0);

  function clique() {
    setContador(contador + 1);
  }

  return (
    <>
      <button onClick={clique}>Clicado {contador} vezes</button>
    </>
  );
}
