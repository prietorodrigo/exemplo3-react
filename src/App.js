import "./styles.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90
};

function MostraImagem() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={"Foto de " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </div>
  );
}

function NMostraImagem() {
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>Não</h2>
    </div>
  );
}

let condicao = true;
let contexto;

export default function App() {
  if (condicao) {
    contexto = <MostraImagem />;
  } else {
    contexto = <NMostraImagem />;
  }
  return <>{contexto}</>;
}

// Log to console
console.log("Hello console");
