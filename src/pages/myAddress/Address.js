import React from "react";
import Footer from "../../components/Footer";
import Address_Container from "./Address_Container";

const Address = () => {
  return (
    <div className=" w-[360px] min-h-screen  mx-auto">
      <Address_Container />
      <div className="mt-10">
      <Footer/>
      </div>

    </div>
  );
};

export default Address;
