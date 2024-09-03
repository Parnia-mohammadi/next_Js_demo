function ShopPage({ params }) {
  // console.log(params);
  return (
    <div>
      we are in shop page
      {JSON.stringify(params) == "{}" ? "" : "/" + params.slug.join("/")}
    </div>
  );
}

export default ShopPage;
