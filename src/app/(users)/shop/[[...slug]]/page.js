import Link from "next/link";

function ShopPage({ params }) {
  // console.log(params);
  return (
    <div>
      we are in shop page
      {JSON.stringify(params) == "{}" ? "" : "/" + params.slug.join("/")}
      <nav>
        <ul>
          <li>
            <Link href="/products">products</Link>
          </li>
          <li>
            <Link href="/shop">shop</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ShopPage;
