import React from "react";
import Top_Header from "../../components/Common_Components/Top_Header";

import CTA from "../../components/Common_Components/CTA";



const Turn_On = () => {
  return (
    <div className=" w-[100%] box-border">
      <Top_Header title="Notification" />
      <section className=" w-full mt-[134px] box-border px-10 flex justify-center">
        <CTA btn_name="Turn On Notification"/>
      </section>
      
      
    </div>
  );
};

export default Turn_On;
