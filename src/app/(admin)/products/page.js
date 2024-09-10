import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

const products = [
  { id: 1, slug: "/t-shirt", title: "t-shirt" },
  { id: 2, slug: "/mobile", title: "mobile" },
  { id: 3, slug: "/labtop", title: "labtop" },
];

function Page() {
  return (
    <div>
      <h1>products page</h1>
      <div>dummy section shows without loading</div>
      <Suspense fallback={<Loading />}>
        <Products />
      </Suspense>
    </div>
  );
}

export default Page;

export async function Products() {
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve("HIIIIII..."), 3000);
  });
  return (
    <ul>
      {products.map((p) => {
        return (
          <li key={p.id}>
            <Link href={`products/${p.slug}`}>{p.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
