import Link from "next/link";
import "../global.css";
export const metadata = {
  title: "users-Next.js",
  description: "Generated by Next.js",
};
const navLinks = [
  { id: 1, slug: "/", title: "Home" },
  { id: 1, slug: "/shop", title: "Shop" },
  { id: 1, slug: "/products", title: "Products" },
];
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className="flex flex-col h-screen">
        <header className="bg-slate-900 text-white w-full p-4">
          Users Root Layout Header
          <nav>
            <ul>
              {navLinks.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.slug}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
        <div className="flex-1 p-4">{children}</div>
        <footer className="bg-blue-400 w-full p-4">
          Users Root Layout Footer
        </footer>
      </body>
    </html>
  );
}
