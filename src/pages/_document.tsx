import { Html, Head, NextScript, Main } from "next/document";
import { JSX } from "react";

const Document = (): JSX.Element => (
  <Html className="scroll-smooth" lang="en">
    <Head />
    <body className="antialiased">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
