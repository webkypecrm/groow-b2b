export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  image?: string;
  // add fields as your backend returns
}
