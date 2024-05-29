import Head from "next/head";
import "./globals.css";
import { Providers } from "./redux/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
