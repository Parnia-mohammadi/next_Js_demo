function ProductDetails({ params }) {
  console.log(params);
  return <div>ProductDetails-{params.productId}</div>;
}

export default ProductDetails;
