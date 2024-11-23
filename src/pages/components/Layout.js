import Footer from "./Footer";
import Navbar from "./Navbar";
import BsNursing from "./BsNursing";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
