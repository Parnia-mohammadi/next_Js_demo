import { resolve } from "styled-jsx/css";

export async function generateMetadata({ params }) {
  const id = params.productId;
  const title = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`T-shirt-${id}`);
    }, 1000);
  });
  return {
    title: title,
    description: "products of page.",
  };
}

function ProductDetails({ params }) {
  //   console.log(params);
  return <div>ProductDetails-{params.productId}</div>;
}

export default ProductDetails;
