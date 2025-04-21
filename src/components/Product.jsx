import Price from "./Price";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Product.css";


function Product({ product, description, oldPrice, newPrice, image }) {
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    height: '150px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem'
  };

  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <div className="card-image" style={backgroundStyle}></div>
      <div className="card-content p-3">
        <h2>{product}</h2>
        <p>{description}</p>
      </div>
      <hr />
      <Price oldPrice={oldPrice} newPrice={newPrice} />
    </div>
  );
}

export default Product;
