import React from "react";
import NextHead from "next/head";

export default function Head({ children, title, ...props }) {
  return (
    <NextHead {...props}>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Inovação para o desenvolvimento profissional" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
      {children}
      <link rel="shortcut icon" href="/favicon.ico" />
    </NextHead>
  );
}
