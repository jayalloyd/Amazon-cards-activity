import "./Price.css";

function Price({ oldPrice, newPrice }) {
  return (
    <div className="price">
      <h4 style={{ textDecoration: 'line-through', color: 'gray' }}>${oldPrice}</h4>
      <h4 style={{ color: 'green' }}>${newPrice}</h4>
    </div>
  );
}

export default Price;
