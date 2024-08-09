import FormPage from "./form/page";
import ProductTable from "./form/productTable/page";

import db from "@/utils/db";

const getProducts = async () => {
  const products = await db.product.findMany({});

  return products;
};

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <FormPage />
      <ProductTable products={products} />
    </>
  );
}
