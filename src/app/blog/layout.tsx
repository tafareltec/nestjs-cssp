import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="bg-gray-800 text-white p-4">
        <h1>My Blog</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/payment">Payment</Link>
        </nav>
      </header>
      {children}
    </>
  );
}
