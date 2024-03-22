import React from "react";

function Dia() {
  return <h2>13/06/2023</h2>;
}

export default function Hora() {
  return (
    <>
      <Dia />
      <h2 className="hora">20:20</h2>
    </>
  );
}
