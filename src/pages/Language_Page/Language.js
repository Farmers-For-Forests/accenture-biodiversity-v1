import React from "react";
import Top_Header from "../../components/Common_Components/Top_Header";
import Language_Component from "./Language_Component";

const Language = () => {
  return (
    <div className=" w-[100%] box-border">
      <Top_Header title="Language" />
      <section className="box-border w-full px-5">
        <section className="w-full h-[94px] mt-[134px] rounded-[10px] bg-[#125B57]">
          <Language_Component language="English" />
          <Language_Component language="Marathi" />
        </section>
      </section>
    </div>
  );
};

export default Language;
