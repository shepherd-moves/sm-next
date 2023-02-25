import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }: any) {
  const router = useRouter();
  const showLayout = !router.pathname.startsWith("/studio");

  return (
    <>
      {showLayout && (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
      {!showLayout && children}
    </>
  );
}

export default Layout;
