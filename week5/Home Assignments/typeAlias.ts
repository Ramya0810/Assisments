
type ProductStatus = "In Stock" | "Out of Stock" | "Discontinued";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  status: ProductStatus;
};

const laptop: Product = {
  id: 1,
  name: "Laptop",
  price: 65000,
  category: "Electronics",
  status: "In Stock",
};

const Headset: Product={
    id:2,
    name:"Headset",
    price:15000,
    category:"Electronics",
    status:"Out of Stock"
};

const keyboard:Product={
    id:3,
    name:"Keyboard",
    price:2000,
    category:"Electronics",
    status:"Discontinued"

};

console.log("Product object with union type:", laptop);


const statusExamples: Product[] = [
  { ...laptop, status: "In Stock" },
  { ...Headset, status: "Out of Stock" },
  { ...keyboard, status: "Discontinued" },
];

console.log("Product objects for every status:", statusExamples);

type ProductDetails = {
  id: number;
  name: string;
  price: number;
  status: ProductStatus;
};

type InventoryDetails = {
  quantity: number;
  location: string;
};

type ProductInfo = ProductDetails & InventoryDetails;


const mobilePhone: ProductInfo = {
  id: 2,
  name: "Mobile Phone",
  price: 25000,
  status: "In Stock",
  quantity: 50,
  location: "Chennai",
};

console.log("ProductInfo object using intersection type:", mobilePhone);


mobilePhone.price = 27000;
mobilePhone.quantity = 45;

console.log("Updated ProductInfo object:", mobilePhone);
