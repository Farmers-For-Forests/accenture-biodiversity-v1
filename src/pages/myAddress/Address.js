import React from "react";
import Footer from "../../components/Footer";
import Address_Container from "./Address_Container";
import Top_title from "./Top_title";

const Address = () => {
  return (
    <div className=" w-[360px]   mx-auto">
    <Top_title/>
      <Address_Container />
      <div className="mt-10">
      <Footer/>
      </div>

    </div>
  );
};

export default Address;
