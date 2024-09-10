import Link from "next/link";

const products = [
  { id: 1, slug: "/t-shirt", title: "t-shirt" },
  { id: 2, slug: "/mobile", title: "mobile" },
  { id: 3, slug: "/labtop", title: "labtop" },
];

function Page() {
  return (
    <div>
      <h1>products page</h1>
      <ul>
        {products.map((p) => {
          return (
            <li key={p.id}>
              <Link href={`products/${p.slug}`}>{p.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Page;
