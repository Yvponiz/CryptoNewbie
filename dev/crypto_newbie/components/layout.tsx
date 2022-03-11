import {ReactElement} from "react";
import Header from "./header";
import styles from '../pages/_app'

type LayoutProps = {
  children: ReactElement[],
  className?:string
};

export default function Layout({children}: LayoutProps) {
  return (
  <>
    <Header></Header>
    <style jsx>{`
    
    `}</style>

    <div>
      {children}
    </div>
  </>);
}
