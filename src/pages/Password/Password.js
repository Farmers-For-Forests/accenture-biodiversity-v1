import React, { useState } from "react";
import Top_Header from "../../components/Common_Components/Top_Header";
import CTA from "../../components/Common_Components/CTA";

const Password = () => {
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className="w-[100%] ">
      <Top_Header title="Password" />
      <section className="w-full box-border px-5 max-h-[178px] mt-[28px] flex flex-col gap-[18px]">
        <p className="font-[600] text-[24px] leading-[26.4px] text-[#125B57] ">
          Password
        </p>
        <p className="font-inter font-[500] text-[20px] leading-[30px] tracking-[-2.3%] text-[#125B57]  ">
          Manage password
        </p>
        {/*-------------- Input field to change Password ----------------- */}
        <div className="w-full max-h-[72px] relative">
          <label
            htmlFor="Password"
            className="font-[500] text-[16px] leading-[16px] text-[#125B57]"
          >
            Password
          </label>
          <div
            className={`w-full absolute top-[24px] ${
              focusedInput === "Password"
                ? "border-none"
                : "border-2 border-[#125B57]"
            } bg-white`}
          >
            <input
              type="password"
              required
              id="Password"
              name="Password"
              onFocus={() => setFocusedInput("Password")}
              onBlur={() => setFocusedInput(null)}
              className={`w-full h-[48px] p-[12px] ${
                focusedInput === "Password"
                  ? "border-2 border-[#125B57]"
                  : "border-none"
              } bg-[#FAFAFA]`}
              style={{
                boxSizing: "border-box",
                outline: focusedInput === "Password" ? "none" : "",
                borderColor: focusedInput === "Password" ? "#125B57" : "",
                borderRadius: "2px",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "17.6px",
                letterSpacing: "-0.02em",
                textAlign: "left",
              }}
            />
          </div>
        </div>

        {/* button section for changing the Password */}
        <section className="mt-[100px] w-full px-5">
          <CTA btn_name="Change Password" />
        </section>
      </section>
    </div>
  );
};

export default Password;
