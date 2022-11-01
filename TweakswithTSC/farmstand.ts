interface Product {
  name: string;
  price: number;
  quantity: number;
}

// create a product variable that inherits the Product interface
const product: Product = {
  name: "Cheeseburger",
  price: 4.99,
  quantity: 1,
};

const Printproduct = (product: Product): void => {
  console.log(`${product.name}- ${product.price}`);
};
