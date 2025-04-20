import Price from "./Price";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Product.css";

function Product({ product, description, oldPrice, newPrice }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <div className="card-content">
        <h1>{product}</h1>
        <h3>{description}</h3>
      </div>
      <hr />
      <Price oldPrice={oldPrice} newPrice={newPrice} />
    </div>
  );
}

export default Product;

