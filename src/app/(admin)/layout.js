import "../global.css";
export const metadata = {
  title: "admin-pages-Next.js",
  description: "admin-description.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className="flex flex-col h-screen">
        <header className="bg-slate-500 w-full p-4">
          Admin Root Layout Header
        </header>
        <div className="flex-1 p-4">{children}</div>
        <footer className="bg-blue-400 w-full p-4">
          Admin Root Layout Footer
        </footer>
      </body>
    </html>
  );
}
