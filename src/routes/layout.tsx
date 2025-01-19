import { FC, ReactNode } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../index.css";

const Layout: FC<{
  children: ReactNode;
}> = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
