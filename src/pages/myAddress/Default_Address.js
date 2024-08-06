import React, { useState } from "react";
import Top_Header from "../../components/Common_Components/Top_Header";
import CTA from "../../components/Common_Components/CTA";

const Default_Address = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [address, setAddress] = useState(
    `67, 7th main, 42nd cross,Tech park, NYC-879`
  );

  return (
    <div className="w-[480px] mx-auto">
      <Top_Header title="My Address" />

      <section className=" w-[318px] h-[569px] mx-auto mt-[28px] flex flex-col gap-[328px]">
        <section className="w-[318px] h-[185px] flex flex-col gap-[18px] ">
          <p className="font-[600] text-[24px] leading-[26.4px] text-[#125B57]">
            Your Address
          </p>
          <p className="font-inter font-[500] text-[16px] leading-[16px] text-[#125B57]">
            Default Address
          </p>

          <div className={`w-[318px] border-2 border-[#125B57] p-[12px] `}>
            <p className="text-[16px] leading-[16px] tracking-[-2%] font-[700] text-[#125B57] py-2">
              Nikhil raj
            </p>
            <textarea
              required
              id="address"
              name="address"
              onFocus={() => setFocusedInput("address")}
              onBlur={() => setFocusedInput(null)}
              className={`w-full bg-[#FAFAFA]`}
              style={{
                boxSizing: "border-box",
                outline: focusedInput === "address" ? "none" : "",
                
                borderRadius: "2px",
                
                color: "#125B57",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "17.6px",
                letterSpacing: "-0.02em",
                textAlign: "left",
                whiteSpace: "pre-wrap", 
                resize: "none", 
                height: "99px", 
              }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </section>

        <section className=" flex justify-center">
          <CTA btn_name="Add a New Address"/>
        </section>
      </section>
    </div>
  );
};

export default Default_Address;
