import React from "react";
import NextHead from "next/head";

export default function Head({ children, title, ...props }) {
  return (
    <NextHead {...props}>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Inovação para o desenvolvimento profissional" />
      {children}
      <link rel="shortcut icon" href="/favicon.ico" />
    </NextHead>
  );
}
