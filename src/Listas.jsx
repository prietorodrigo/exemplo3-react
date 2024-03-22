import "./styles.css";

const products = [
  { title: "Cabbage", id: 1, fruta: false },
  { title: "Garlic", id: 2, fruta: false },
  { title: "Apple", id: 3, fruta: true }
];

const listaProdutos = products.map((product) => (
  <li
    key={product.id}
    style={{
      color: product.fruta ? "magenta" : "darkgreen"
    }}
  >
    {product.title}
  </li>
));

export default function Listas() {
  return (
    <>
      <ul>{listaProdutos}</ul>
    </>
  );
}
