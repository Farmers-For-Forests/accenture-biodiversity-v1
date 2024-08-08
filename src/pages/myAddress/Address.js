import React from "react";

import Address_Container from "./Address_Container";
import Top_Header from "../../components/Common_Components/Top_Header";


const Address = () => {
  return (
    <div className=" w-[100%]  box-border">
    <Top_Header title="My address" />
    <div className="box-border px-5">
    <Address_Container />
    </div>

      

    </div>
  );
};

export default Address;
