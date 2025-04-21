import Product from "./Product";
import "./ProductTab.css";
import laptop from "../assets/laptop.jpeg";
import phone from "../assets/phone.jpeg";
import tablet from "../assets/tablet.jpeg";

import 'bootstrap/dist/css/bootstrap.min.css';
function ProductTab() {
  const products = [
    {
      name: "Laptop",
      description: "High-performance for work and play",
      oldPrice: 100,
      newPrice: 80,
      image: laptop
    },
    {
      name: "Phone",
      description: "Stay connected on the go",
      oldPrice: 200,
      newPrice: 150,
      image: phone
    },
    {
      name: "Tablet",
      description: "Portable and powerful for media",
      oldPrice: 300,
      newPrice: 250,
      image: tablet
    }
  ];

  return (
    <div>
      <h1>Block Buster Deals - Shop now</h1>
      <div className="product">
        {products.map((item, index) => (
          <Product
            key={index}
            product={item.name}
            description={item.description}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductTab;
