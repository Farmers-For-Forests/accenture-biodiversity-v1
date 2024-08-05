import React from "react";
import Top_Header from "../../components/Common_Components/Top_Header";

import CTA from "../../components/Common_Components/CTA";



const Turn_Off = () => {
  return (
    <div className=" w-[360px]   mx-auto">
      <Top_Header title="Notification" />
      <section className=" w-full mt-[134px] flex justify-center">
        <CTA btn_name="Turn off Notification"/>
      </section>
      
      
    </div>
  );
};

export default Turn_Off;