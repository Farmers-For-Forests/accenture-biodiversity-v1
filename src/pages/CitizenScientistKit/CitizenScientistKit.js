import React from "react";
import Top_Header from "../../components/Common_Components/Top_Header";
import Navbar from "./Navbar";
import UserList from "./UserList";

const CitizenScientistKit = () => {
  return (
    <div className="w-[100%]">
      <Top_Header title="Citizen scientist kit" />
      <section className="w-full  box-border px-5 h-[326px] flex flex-col gap-[31px] mt-[14px] ">
        <section className="w-full  flex justify-center">
          <Navbar />
        </section>
        <section className="w-full h-[269.7px] flex flex-col gap-[18px] ">
          <UserList name="Admin 1" message="hello" />
          <UserList name="Rajesh Shetty" message="Mandala garden is the best for this season."/>
          <UserList name="Admin 2" message="Let us know if you have any more queries?"/>
         
        </section>
      </section>
    </div>
  );
};

export default CitizenScientistKit;
