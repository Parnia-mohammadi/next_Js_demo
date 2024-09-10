"use client";
import { resolve } from "styled-jsx/css";

// export async function generateMetadata({ params }) {
//   const id = params.productId;
//   const title = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Products-${id}`);
//     }, 1000);
//   });
//   return {
//     title: title,
//     description: "products of page.",
//   };
// }

function ProductDetails({ params }) {
  //   console.log(params);
  // throw new Error("products error");
  const random = Math.floor(Math.random() * 2);
  if (random == 1) {
    throw new Error("products error");
  }
  return <div>ProductDetails-{params.productId}</div>;
}

export default ProductDetails;
