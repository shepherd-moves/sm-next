import { useRouter } from "next/router";
import Navbar from "./Navbar";
import NewNav from "./NewNav";
import Footer from "./Footer";

function Layout({ children }: any) {
  const router = useRouter();
  const showLayout = !router.pathname.startsWith("/studio");

  return (
    <>
      {showLayout && (
        <>
          <NewNav />
          {children}
          <Footer />
        </>
      )}
      {!showLayout && children}
    </>
  );
}

export default Layout;
