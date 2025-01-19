import React from "react";
import DetailComp from "@/components/(pages)/DetailComp";
import { client } from "@/sanity/lib/client";
import { Product } from "../page"; 
import ProductDetail from "@/components/(pages)/ProductDetail";

interface Params {
  params: {
    _id: string; 
  };
}

const SingleProductDetail = async ({ params }: Params) => {
  const { _id } = await params;

  console.log("Fetching product with id:", _id);

  // Fetch product data from Sanity
  const product: Product | null = await client.fetch(
    `*[_type == "products" && _id == $id][0]{
        _id,
        title,
        price,
        priceWithoutDiscount,
        badge,
        "imageUrl":image.asset->url,
        description,
        inventory,
        tags,
        category->{
          title,
          products,
          "imageUrl":image.asset->url
        }
      }`,
    { id:_id }
  );

  if (!product) {
    return <p>Product not found!</p>;
  }

  console.log(product);

  return (
    <div>
      <ProductDetail product={product}/>

      <DetailComp />
    </div>
  );
};

export default SingleProductDetail;