import React from "react";
import Link from "next/link";

function StudioNavbar(props: any) {
  return (
    <>
      <div className="flex justify-between my-4 mx-4">
        <Link href="/">Back to Website</Link>
        <div className="flex">
          <ul className="flex gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      {props.renderDefault({ props })}
    </>
  );
}

export default StudioNavbar;
