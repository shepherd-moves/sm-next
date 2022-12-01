import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
