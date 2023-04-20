import { ReactElement } from "react";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: ReactElement,
  className?: string,
  isLoggedIn: boolean
};

export default function Layout({ children, isLoggedIn }: LayoutProps) {
  return (
    <div className="layout">
      <Header isLoggedIn={isLoggedIn}></Header>
        {children}
      <Footer></Footer>
    </div>);
}
