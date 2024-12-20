import ProductList from "@/components/pages/product-shop";
import { URL } from "@/lib/constants/url";

export default async function ProductPage() {

  const data = await fetch(`${process.env.URL}/api/shop`);
  const products = await data.json()

  console.log(products)
  return (
    <>
      <ProductList products={products} />
    </>
  )
}