import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "@/components/Button";

interface IProps {
  header?: any;
  footer?: any;
  children: any;
}

const DefaultLayout = (props: IProps) => {
  return (
    <main className="">
      <Header {...(props.header || {})} />
      {props.children}
      <Footer {...(props.footer || {})} />
      <Button />
    </main>
  );
};

export default DefaultLayout;
