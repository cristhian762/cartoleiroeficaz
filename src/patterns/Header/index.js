import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <React.Fragment>
      <header>
        <div>
          <Image src="/image/logo.png" alt="Logo" width="113" height="117" />
        </div>
      </header>
    </React.Fragment>
  );
}
