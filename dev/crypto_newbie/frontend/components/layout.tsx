import {ReactElement} from "react";
import Header from "./header";

type LayoutProps = {
  children: ReactElement[],
  className?:string
};

export default function Layout({children}: LayoutProps) {
  return (
  <>
    <Header></Header>

    <div>
      {children}
    </div>
  </>);
}
