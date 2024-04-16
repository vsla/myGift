import React from "react";
import { getProducts } from "actions";
import { Product } from "types";
import { ProductList } from "components/Organisms/ProductList";
import { ProductModal } from "components/Organisms/ProductModal";

const ProductTablePage = async () => {
  const products: Product[] = await getProducts();

  return (
    <div className="container mx-auto p-2 sm:p-0">
      <div className="mb-4 flex flex-grow justify-between items-center mt-4">
        <h1 className="text-2xl font-bold  text-white">Product List</h1>
        <ProductModal />
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductTablePage;