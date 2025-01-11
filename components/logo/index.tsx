import React from "react";
import Image from "next/image";

export function Logo(props) {
  return (
    <Image
      className="logo-comp"
      src={props.pic}
      alt="nicos-logo"
      width={86}
      height={75}
    />
  );
}
