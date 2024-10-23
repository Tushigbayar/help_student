import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface IProps {
  header?: any;
  footer?: any;
  children: any;
}

const DefaultLayout = (props: IProps) => {
  return (
    <main>
      <Header {...(props.header || {})} />
      {props.children}
      <Footer {...(props.footer || {})} />
    </main>
  );
};

export default DefaultLayout;
