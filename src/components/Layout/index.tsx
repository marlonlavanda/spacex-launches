import Footer from "../Footer";
import Header from "../Header";
interface Props {
  children: JSX.Element;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
