export type Product = {
  id: string;
  title: string;
  description: string;
  color: string;
  fabric: string;
  price: number;
  count: number;
};

export type ProductList = Array<Product>;
